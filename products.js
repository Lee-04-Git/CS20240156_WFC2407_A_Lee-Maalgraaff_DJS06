// A list of products with prices:
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  /* 1. **Log Products** */
  // Emoji mapping for each product
  const productEmojis = {
    banana: '🍌',
    mango: '🥭',
    potato: '🥔',
    avocado: '🥑',
    coffee: '☕',
    tea: '🍵'
  };
  
  console.log(products.map(({ product }) => `${productEmojis[product] || '❓'} Product: ${product}`).join('\n'));

  /* 2. **Filter by Name Length** */
  console.log(
    products
      .filter(({ product }) => product.length <= 5)
      .map(({ product, price }) => `${product} - Price: $${price}`)
  );

  /* 3. **Price Manipulation** */
  console.log(
    products
      .filter(({ price }) => price && !isNaN(price))  
      .reduce((total, { price }) => total + Number(price), 0)
  );
  
  