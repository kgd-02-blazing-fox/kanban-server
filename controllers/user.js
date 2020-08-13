const { User } = require('../models/index.js');
const { comparePassword } = require('../helpers/bcrypt.js');
const { signToken } = require('../helpers/jwt.js');
const { verify } = require('../helpers/googleOAuth.js');

class UserController {
    static async login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })

            const dataPassword = user ? user.password : '';

            if(!user) {
                next({
                    name: '400 Bad Request',
                    errors: [{message: 'Invalid username or password'}]
                });
            } else if(!comparePassword(password, dataPassword)) {
                next({
                    name: '400 Bad Request',
                    errors: [{message: 'Invalid username or password'}]
                });
            } else {
                const payload = {
                    email: user.email
                };

                const token = signToken(payload);

                res.status(200).json({name: user.name, token});
            }

        } catch(err) {
            next(err);
        }
    }

    static async googleLogin(req, res, next) {
        const googleToken = req.headers.google_token;
        
        try {
            const googlePayload = await verify(googleToken);
            const email = googlePayload.email;
            const name = googlePayload.name;

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if(user) {
                if(!comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
                    next({
                        name: '400 Bad Request',
                        errors: [{message: 'Please login through website'}]
                    });
                } else {
                    const payload = {
                        email: user.email
                    };
    
                    const token = signToken(payload);
    
                    res.status(200).json({name: user.name, token});
                }
            } else {
                const newUser = {
                    email,
                    password: process.env.GOOGLE_DEFAULT_PASSWORD,
                    name
                }
                const user = await User.create(newUser);

                const payload = {
                    email: user.email
                };

                const token = signToken(payload);

                res.status(200).json({name: user.name, token});
            }
            
        } catch(err) {
            next(err);
        }
    }

    static async register(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }

        try {
            const user = await User.create(newUser);
            
            const createdUser = {
                id: user.id,
                email: user.email,
                name: user.name,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }

            res.status(201).json({user: createdUser});
        } catch(err) {
            next(err);
        }

    }
}

module.exports = UserController;