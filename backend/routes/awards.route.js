const express = require('express');
const app = express();
const awardRoute = express.Router();

let AwardModel = require('../model/award');

// Add Song
awardRoute.route('/create-award').post((req, res, next) => {
  AwardModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all songs
awardRoute.route('/').get((req, res) => {
  AwardModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single song
awardRoute.route('/get-award/:id').get((req, res) => {
  AwardModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update song
awardRoute.route('/update-award/:id').put((req, res, next) => {
  AwardModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Song successfully updated!')
    }
  })
})

// Delete song
awardRoute.route('/delete-award/:id').delete((req, res, next) => {
  AwardModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = awardRoute;