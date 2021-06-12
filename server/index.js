const express = require('express')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user.routes');
const recipeRouter = require('./routes/recipes.routes');
const aboutRouter = require('./routes/about.routes');
const adminRouter = require('./routes/admin.router');
const auth = require('./auth/index');
const user = require('./routes/user.routes')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
// app.use(connect.cookieParser());
// app.use(connect.session({ secret: 'your secret here'} ));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET)); // secret, used to encrypt the cookie

app.use('/auth', auth)
app.use('/', userRouter)
app.use('/', recipeRouter)
app.use('/', aboutRouter)
app.use('/login', adminRouter)
app.use('/user', user);


//error handler
app.use(function(err, req, res, next) {

    res.status(err.status || 500);

    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});


const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on post ${PORT}`));
    }catch (e) {
        console.log(e)
    }
}

start()

