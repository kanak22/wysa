const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticateJWT} = require("../middleware/auth");


router.get("/", async (req, res) => {
    try {
        res.render('index');
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.render('login');
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.post("/signup", async (req, res) => {
    try {
        const { nickname, password } = req.body;

        const existingUser = await User.findOne({ nickname });
        if (existingUser !== null) {
            return res.redirect('/?error=nickanme-already-exists');
        }

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            nickname: nickname,
            password: passwordHash,
        });

        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
            expiresIn: '1h',
        });

        res.cookie("accesstoken", token, {
            expires: new Date(Date.now() + 100000),
            httpOnly: true,
            secure: true,
        });

         res.redirect('/login');
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.post('/home', async (req, res) => {
    try {
        const { nickname, password } = req.body;

        const user = await User.findOne({ nickname });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.redirect('/login?error=invalid-password');
        }

        const token = jwt.sign({ userId: user._id, nickname: user.nickname }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.cookie("accesstoken", token, {
            expires: new Date(Date.now() + 100000),
            httpOnly: true,
            secure: true,
        });

        res.render('home');
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});


router.get('/home', async (req, res) => {
    try {
        res.render('home');
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

module.exports = router;