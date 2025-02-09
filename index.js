import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
    {
        id: 1 ,
        name: 'table wooden',
        price: 200,
        image: 'https://images.pexels.com/photos/19892450/pexels-photo-19892450/free-photo-of-rustic-picnic-scene-in-snowy-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=600'
    },{
        id: 2 ,
        name: 'table glass',
        price: 250,
        image: 'https://images.pexels.com/photos/30620868/pexels-photo-30620868/free-photo-of-fresh-mango-juice-being-poured-into-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },{
        id: 3 ,
        name: 'table plastic',
        price: 150,
        image: 'https://images.pexels.com/photos/5797994/pexels-photo-5797994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },{
        id: 4 ,
        name: 'table metal',
        price: 300,
        image: 'https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },{
        id: 5 ,
        name: 'table polyester',
        price: 150,
        image: 'https://images.pexels.com/photos/2973400/pexels-photo-2973400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
//http://localhost:3000/api/products?search=metal

  if(req.query.search) {
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  },3000);

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});