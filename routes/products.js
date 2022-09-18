const router = require('express').Router();

const apiKeyMiddileware = require('../Middlewares/apiKey')

const ErrorHandler = require('../errors/ErrorHandler');
let products = require('../ProductData')
router.get('/product',(req, res)=>{
    res.render('products',{

        title : 'MY PROUCT PAGE'

    });
       
  
});




router.get('/api/Products', (req, res)=>{

    res.json(products);



})

router.post('/api/Products', (req, res,next)=>{

    const {name,price} = req.body;

    if(!name || !price){
         next(ErrorHandler.validationError('Name And Price Fields Are Required'));
        // throw new Error('All Field Are Required');
        // return res.status(422).json({error: "All fields are required"})
    }


    const product = 
        {
            name: name,
            price: price,
            id : new Date().getTime().toString()
    
        }
    
    products.push(product)


    res.json(product);

});

router.delete('/api/products/:productid',(req,res)=>{
    products = products.filter((product)=>req.params.productid !== product.id);
    res.json({status: 'Ok'});
})





module.exports = router