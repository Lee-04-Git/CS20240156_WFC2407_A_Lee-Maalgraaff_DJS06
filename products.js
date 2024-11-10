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
  
  console.log(
    products.map(({ product }) => `${productEmojis[product] || '❓'} Product: ${product}`).join('\n')
    );

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

  /* 4. **Concatenate Product Names**: */
  console.log(
    products.reduce((acc, { product }) => `${acc}${product}, `, '').slice(0, -2)
    );

 /* 5. **Find Extremes in Prices** */
    console.log(
    (() => {
      // Filter out products with valid prices (non-empty and numeric)
      const validProducts = products.filter(({ price }) => price && !isNaN(parseFloat(price)));
      
      // If there are no valid products, return a message
      if (validProducts.length === 0) return "No valid products with prices.";
    
      // Find the highest and lowest prices
      const prices = validProducts.map(({ price }) => parseFloat(price)); // Ensure the price is treated as a number
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);
    
      // Find the product with the highest price
      const maxProductObj = validProducts.find(({ price }) => parseFloat(price) === maxPrice);
      const maxProduct = maxProductObj ? maxProductObj.product : 'Unknown';
    
      // Find the product with the lowest price
      const minProductObj = validProducts.find(({ price }) => parseFloat(price) === minPrice);
      const minProduct = minProductObj ? minProductObj.product : 'Unknown';
    
      // Return the formatted result
      return `Highest: ${maxProduct} ($${maxPrice}). Lowest: ${minProduct} ($${minPrice}).`;
    })()
  );

  /* 6. **Object Transformation** */
  console.log(
    Object.entries(products).reduce((acc, [_, { product, price }]) => {
      // Parse the price and check if it's valid and positive
      const validPrice = parseFloat(price);
  
      // Only process valid products with a positive price
      if (validPrice > 0 && product) {
        // Add product to the accumulator with the desired structure
        acc[product] = { name: product, cost: validPrice };
      }
  
      return acc;
    }, {})
  );
  

  
  