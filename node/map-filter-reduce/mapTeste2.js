const productsPrices = [100, 150, 300];
/* const productsDiscount = productsPrices.map(price => {
    return price * 0.9;
  }); */


  const products = [{
    name: 'TV',
    price: 100
  }, {
    name: 'Monitor',
    price: 150
  }, {
    name: 'SSD',
    price: 300
  }];

  const productsDiscount = Object.keys(products).map(key => products[key]['price'] *= 0.9);

  console.log(productsDiscount)