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

/* #### Exercises */

/* 1.) ForEach Exercise - Match Name with Province */
// Loop through each name and log it with an emoji and index
names.forEach((name, index) => console.log(`Name ${index + 1}: --> 👤${name}`));

// Loop through each province and log it with an emoji and index
provinces.forEach((province, index) => console.log(`Province ${index + 1}: 🌍 ${province}`));

// Loop through each name and log it with its matching province using emojis
names.forEach((name, index) => {
  console.log(`👤 ${name} 🌍 (${provinces[index]})`);
});


/* 2.) Map Method Exercise 1 - Convert Provinces to Uppercase */
const provincesInUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesInUpperCase);


/* 3.) Map Method Exercise 2 - Name Length */
const nameLength = names.map(name => `The length of ${name} is ${name.length}`);
console.log(nameLength);


/* 4.) Sort Method */
const sortedProvinces = [...provinces].sort();
console.log("Provinces in alphabetical order:", sortedProvinces);


/* 5.) Filter Method Exercise 1 */
const provincesWithoutCape = provinces.filter(province => !province.includes('Cape'));
console.log(`There are ${provincesWithoutCape.length} provinces without 'Cape' in their name.`);


/* 6.) Map and Some Method */
const namesWithS = names.map((name, index) => ({
  name,
  hasS: [...name.toLowerCase()].some(char => char === 's') ? '✔️' : '❌',
  index,
}));
console.log("Names and their 'S' presence:", namesWithS);

/* 7.) Object Mapping */
const nameProvinceMapping = names.reduce((acc, name, index) => {
  const province = provinces[index];
  const provinceInitials = province.split(' ').map(word => word[0]).join('');
  acc[`🧑‍🤝‍🧑 ${name} (${provinceInitials})`] = `🏞️ ${province}`;
  return acc;
}, {});

console.log("Name and Province Mapping with Initials:", nameProvinceMapping);


