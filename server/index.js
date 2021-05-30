const express = require('express')

const userRouter = require('./routes/user.routes');
const recipeRouter = require('./routes/recipes.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use('/', userRouter)
app.use('/', recipeRouter)

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
