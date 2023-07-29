const router = require('express').Router();
let clickerData = require('../models/clicker-data.model');

router.get('/', (req, res) => {
  console.log("Received general GET request");
  clickerData.find()
    .then(clickerDatas => res.json(clickerDatas))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get('/:username', (req, res) => {
  console.log("Received directed GET request");
  console.log(req.body);
  const username = req.params.username;
  if (username) {
    console.log(username);
    clickerData.find( {username: username} )
      .then(entries => {
        if (entries.length > 0) {
          res.json(entries[0]);
        }
        else{
          res.status(400).json(`No such user: ${username}`);
        }
      })
      .catch(err => res.status(400).json(`Error when getting user ${username}: ${err}`));
  }
});

router.post('/add', (req, res) => {
    console.log("Received add request");
    const username = req.body.username;
    const clicks = Number(req.body.clicks);
    const date = new Date();

    clickerData.find({ username: username})
      .then(dataEntry => {
        if (dataEntry.length > 0) {
            dataEntry[0].clicks = clicks;
            dataEntry[0].date = date;
            dataEntry[0].save()
              .then(() => res.json("Clicker data updated"))
              .catch(err => res.status(400).json("Update error: " + err));
        }
        else {
            const newClickerData = new clickerData({
                username, clicks, date
            });
        
            newClickerData.save()
              .then(() => res.json("Clicker data added"))
              .catch(err => res.status(400).json("Add error: " + err));
        }
      })
});

module.exports = router;