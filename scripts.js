// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


/* ForEach Exercise */
// Loop through each name and log it with an emoji and index
names.forEach((name, index) => console.log(`Name ${index + 1}: --> 👤${name}`));

// Loop through each province and log it with an emoji and index
provinces.forEach((province, index) => console.log(`Province ${index + 1}: 🌍 ${province}`));

// Loop through each name and log it with its matching province using emojis
names.forEach((name, index) => {
  console.log(`👤 ${name} 🌍 (${provinces[index]})`);
});

/* Map Method Exercise */
const provincesInUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesInUpperCase);
