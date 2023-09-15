const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const db = require('./database/models');
const cors = require('cors');
const verifyJWT = require('./middlewares/verifyJWT');
// const session = require('./session/index.js');
const bodyParser = require('body-parser');

const app = express();

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`http://127.0.0.1:${process.env.PORT}`);
  });
});
// app.use(session());
app.use(express.urlencoded({ origin: [`http://127.0.0.1:${process.env.PORT}`, `http://127.0.0.1:${process.env.REACT_PORT}`], extended: false }));
app.use(bodyParser.json());
app.use(cors({credentials:true}));
app.use(cookieParser());

const userRoutes = require('./routes/Users.js');
app.use('/auth', userRoutes);

const trakerRoutes = require('./routes/Trakers.js');
app.use('/traker', trakerRoutes);

const pageRoutes = require('./routes/Pages.js');
app.use('/page', pageRoutes);

app.use(verifyJWT);

const refreshRoutes = require('./routes/Refresh.js');
app.use('/refresh', refreshRoutes);
