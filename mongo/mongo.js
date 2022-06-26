const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors = require('cors')

//make conection
const dbConex = async ()  => {
    await mongoose.connect('mongodb+srv://opendrink-user:opendrink-password@opendrink.akqtx.mongodb.net/?retryWrites=true&w=majority');
  }
  dbConex();


  const mainDataShema = new Schema({data: String});
  mainDataShema.path('_id');


  const mainData = mongoose.model('mainData', mainDataShema)