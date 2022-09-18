const express = require('express');

const app = express();
const path  = require('path');
const ErrorHandler = require('./errors/ErrorHandler');

const mainRouter = require('./routes/index')

const productRouter = require('./routes/products')



const PORT = process.env.PORT || 3000


app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.json());

// console.log(app.get('view engine'))

// app.set('views',path.resolve(__dirname) + 'tamplate')


console.log(app.get('views'))


app.use(productRouter);

app.use(mainRouter);

app.use((req, res, next)=>{

    return res.json({messsage:'Page Not Found'})

});


app.use((err,req,res, next)=>{


    if (err instanceof ErrorHandler){

        res.status(err.status).json({
            error:{
                messsage:err.message,
                status :err.status

            }
        });

    }
    else{

        res.status(500).json({
            error:{
                messsage:err.message,
                status :err.status

            }
        });

    }
    console.log('Error', err.messsage);
    res.status(422).json({messsage: err.messsage})



});
app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});