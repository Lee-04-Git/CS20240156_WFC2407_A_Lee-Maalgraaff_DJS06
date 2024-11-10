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
  
  // Log each product with its emoji
  products.forEach(({ product }) => {
    const emoji = productEmojis[product] || '❓'; // Default emoji if product is not in the map
    console.log(`${emoji} Product: ${product}`);
  });
  