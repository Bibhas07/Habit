const Habit = require('../models/habitModel')

exports.getAllHabits = async (req , res) => {
    try{
        const habits = await Habit.find().exec();
        res.render('index' , {habits})
    }catch(err){
        console.error('Error Fetching Habits: get all habits ' , err);
        res.status(500).send('Error Fetching habits')
    }
}

exports.addHabit = async(req , res) => {
    const newHabit = req.body.habit;
    try{
        const habit = new Habit({name : newHabit})
        await habit.save();
        // console.log('New Habit Added :' , habit)
        res.redirect('/')
    }catch(e){
        console.error('Error adding Habit' , err)
        res.status(500).send('error handling habit')
    }
}

exports.manageHabit = async (req, res) => {
    const habitId = req.params.id;
    try {
      const habit = await Habit.findById(habitId).exec();
      if (!habit) {
        return res.status(404).send('Habit not found');
      }
  
      if (req.method === 'GET') {
        // Render the habit.ejs view to show status for the last 7 days
        res.render('habit', { habit });
      } else if (req.method === 'POST') {
        // Update the habit status for the last 7 days
        const dates = Object.keys(req.body);
        const updates = dates.map(date => ({
          date,
          status: req.body[date],
        }));
        
        const uniqueDates = new Set(habit.history.map(entry => entry.date.toISOString()));
        habit.history = habit.history.filter(entry => !uniqueDates.has(entry.date.toISOString()));
        habit.history.push(...updates);
        await habit.save();
        // console.log('Habit status updated:', habit);
        res.redirect('/');
      }
    } catch (err) {
      console.error('Error fetching or updating habit in controller manage:', err);
      res.status(500).send('Error fetching or updating habit');
    }
  };
  

  exports.deleteHabit = async (req , res) =>{
    const deleteId = req.params.id
    try{
      const deleteH = await Habit.deleteOne({"_id":deleteId})
      res.redirect('/')
    }catch(e){
      console.error('Error deleting the habit', err);
      res.status(500).send('Error deleting the habit');
    }
  }