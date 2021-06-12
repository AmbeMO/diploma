// import * as User from "../db/user";

// import {hash} from "bcrypt";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../db/user')

router.get('/', (req, res) => {
    res.json({
        message: 'lock'
    });
});
function validateUser(user) {
    const validEmail = typeof user.email == 'string'
        && user.email.trim() != '';
    const validPassword = typeof user.password == 'string'
        && user.password.trim() != ''
        && user.password.trim().length >= 6;

    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    if(validateUser(req.body)) {
        User
            .getOneByEmail(req.body.email)
            .then(user => {
                console.log('user', user)
                //if user not found
                if(!user) {

                    //hash pass
                    bcrypt.hash(req.body.password, 8)
                        .then((hash) => {
                            const user = {
                                email: req.body.email,
                                password: hash,
                                name: req.body.name,
                                last_name: req.body.lastName
                            }
                            User
                                .create(user)
                                .then(id => {
                                    res.json({
                                        id,
                                        message: 'nice'
                                    })
                                })
                    });
                }else{
                    next(new Error('Email in use'))
                }
        });
    } else {
        next(new Error('Invalid user'))
    }
});

router.post('/login', (req, res, next) => {
    if(validateUser(req.body)) {
        User
            .getOneByEmail(req.body.email)
            .then(user => {
                console.log('user', user)
                if(user) {
                    //compare password with hash pass
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then((result) => {
                            //if pass match
                            if(result) {
                                // setting the 'set-cookie' header
                                const isSecure = req.app.get('env') != 'development'
                                res.cookie('user_id', user.id, {// **** user_id or id????
                                    httpOnly: true,
                                    secure: isSecure, //secure when in production
                                    signed: true
                                })
                                res.json({
                                    message: 'logged in'
                                })
                            }else {
                                next( new Error('Invalid login'))
                            }
                    })
                } else {
                    next( new Error('Invalid login'))
                }
            })
    }else{
        next(new Error('Invalid login'))
    }
})


module.exports = router;
