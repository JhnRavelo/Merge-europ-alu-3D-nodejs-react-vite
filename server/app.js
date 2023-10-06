const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const db= require('./database/models');
const {users, products, trakers, pages, sessions} = require("./database/models")
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();  

pages.hasMany(products, {onDelete: 'CASCADE', foreignKey:"pageId"})
products.belongsTo(pages, {onDelete: 'CASCADE', foreignKey:"pageId"})
users.hasOne(sessions, {foreignKey:"userId"})
sessions.belongsTo(users, {foreignKey:"userId"})

db.sequelize.sync({alter:true}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`http://127.0.0.1:${process.env.PORT}`);
  });
});

app.use(express.static('public'))
app.use(cookieParser());
app.use(express.urlencoded({  extended: false}));
app.use(bodyParser.json());
app.use(cors({credentials:true, origin:'http://localhost:5173'}));

const refreshRoutes = require('./routes/Refresh.js');
app.use('/refresh', refreshRoutes);

const userRoutes = require('./routes/Users.js');
app.use('/auth', userRoutes);

const trakerRoutes = require('./routes/Trakers.js');
app.use('/traker', trakerRoutes);

const pageRoutes = require('./routes/Pages.js');
app.use('/page', pageRoutes);

const productRoutes = require('./routes/Products.js')
app.use('/product', productRoutes)



