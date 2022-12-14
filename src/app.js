const express= require('express');
const app = express();
const path = require ('path');

/*rutes*/

const produscts = require('./routes/produscts');
app.use('/products', products);


/*404*/
app.use((req,res,next)=>{
    res.render('404-page');
})
/* config express*/
//const html = path.resolve(__dirname,'index.html');
app.get('/', function(req,res){
    res.send('Home')

})
app.get('/productos', function(req,res){
    res.send('productos')

})
app.get('/prodcutos/nombre', function(req,res){
    res.send('Producto con nombre:'+ req.params.nombre)


})
app.get('/usuario', function(req,res){
    res.send('Usuario')

})
app.set( 'views engine','ejs');
app.set(' views', path.resolve(__dirname), 'views');
app.use (express.static(path.resolve(__dirname,'../public')));


const products = require('./routes/procucts');
app.use('/products',products);
 app.listen(3000,()=> console.log('servidor corriendo en el puerto 3000'));

// app.js -> router 