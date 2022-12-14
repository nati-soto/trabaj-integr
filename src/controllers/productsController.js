const path = require( 'path');
const fs = require ('fs');

const pathJson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const procucts = JSON.parse( procuctsJson);

let controller ={ 
    home: (req,res) => {
        res.render('home', {productos: products}); 
        
    },
    detail: (req, res )=>{
        products.forEach(product => 
            i( product.id == req.params.id ) {
                res,render ('detail' {product:product});    
        });
    }
}
res.redirect('404-not-found');
module.exports = controller;

