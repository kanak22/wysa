const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const User = require('../models/User');
const { authenticateJWT } = require("../middleware/auth");

router.post('/create', authenticateJWT, async (req, res) => {
  try {
    const authorID = req.user._id; 
    const { title, description } = req.body;

    const newArticle = new Article({
      authorID: authorID,
      title: title,
      description: description,
    });

    await newArticle.save();
    res.render('saved');
    return;
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.get('/getAll', authenticateJWT, async (req, res) => {
  try {
    const articles = await Article.find().populate('authorID', 'nickname').exec();
    res.render('articles', { articles });
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/saved', authenticateJWT, async (req, res) => {
  try {
    res.render('saved');
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})

router.get('/create', authenticateJWT, async (req, res) => {
  try {
    res.render('article');
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
})
module.exports = router;
