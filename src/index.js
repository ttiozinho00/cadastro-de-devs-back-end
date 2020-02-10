const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes); 
app.listen(3333);

mongoose.connect('mongodb+srv://Douglas:mestre123@cluster0-os5h9.mongodb.net/front-end?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex:true,useFindAndModify: true})
