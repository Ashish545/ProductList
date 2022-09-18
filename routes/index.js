const router = require('express').Router();

const apiKeyMiddleware  = require('../Middlewares/apiKey');

// router.use(apiKeyMiddleware);

router.get('/',(req, res)=>{
    res.render('index',{
        title : 'MY HOME PAGE'
    });
       
  
});
router.get('/about',(req, res)=>{
    res.render('about',{
        title : 'MY ABOUT PAGE'
    });
       
  
});



  
router.get('/download',(req, res)=>{
    res.download(path.resolve(__dirname) + '/about.html');
       
  
});
// router.get('/api/products',(req, res)=>{
//     res.json([
//         {
//             id: 123,
//             product:'chrome',

//         },
//         {

//         id: 124,
//         product:"Firefox"

//         }
//     ])
       
  
// });














module.exports = router;