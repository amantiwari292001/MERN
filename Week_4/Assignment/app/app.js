const express = require('express');
const adminrouter = require('../router/admin-router');
const userRouter = require('../router/user-router');
const app = express();
app.use(express.json());
const port = 123;

app.use('/admin', adminrouter);
app.use('/user', userRouter);

app.listen(port);