const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');
const expressEjsLayouts = require('express-ejs-layouts');

const IndexRouter=require('./routes/index');
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://som:som12345@cluster0-gmlps.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',error => console.error("error"));
db.once('open',() => console.log("connected to mongoose!!"));

app.use('/',IndexRouter);

app.listen(process.env.PORT || 3000);
