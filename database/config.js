const mongoose = require('mongoose');

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.DB_CNN, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});
        console.log('DB Online');
    }
    catch(error)
    {
        console.log(error);
        throw new Error('Error, comunicarse con el admin')
    }
}
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

module.exports ={
    dbConnection
}