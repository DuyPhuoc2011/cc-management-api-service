const express = require('express');
const cors = require('cors');
const app = express();
const clientRouter = require('./routes/client');
const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/clients', clientRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);

app.listen(8080, () => console.log('Server is running'));