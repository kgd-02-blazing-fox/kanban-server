const {User, Todo} = require('../models/index.js');
const {verifyToken} = require('../helpers/jwt.js');

async function authentication(req, res, next) {
    const token = req.headers.token;
    
    if(!token) {
        next({
            name: '401 Unauthorized',
            errors: [{message: 'You have to logged in!'}]
        });
    } else {
        const payload = verifyToken(token);
        
        try {
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            });

            if(!user) {
                next({
                    name: '401 Unauthorized',
                    errors: [{message: 'You have to logged in!'}]
                });
            } else {
                req.userLogin = user;

                next();
            }
        } catch(err) {
            next(err);
        }
    }
}

async function authorization(req, res, next) {
    const todoId = Number(req.params.id);

    try {
        const todo = await Todo.findByPk(todoId);
    
        if(!todo) {
            next({
                name: '404 Not Found',
                errors: [{message: 'Not Found'}]
            });
        } else {
            if(todo.UserId !== req.userLogin.id) {
                next({
                    name: '403 Forbidden',
                    errors: [{message: `You don't have permission to access`}]
                });
            } else {
                next();
            }
        }
    } catch(err) {
        next(err);
    }
}

module.exports = {authentication, authorization};