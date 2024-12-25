import { faker } from "@faker-js/faker";

export const products = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1, // Adding an ID for each product
  // imgSrc: faker.image.imageUrl(200, 200, "product", true),
  //  // Generates a product image URL (200x200 size, keyword: "product")
  imgSrc: faker.image.urlLoremFlickr({width:200,height:200,category:"product"}),
  productName: faker.commerce.productName(), // Generates a random product name
  price: parseFloat(faker.commerce.price({min:10, max:1000})), // Generates a random price between 10 and 1000
  stock: faker.number.int({ min: 0, max: 100 }), // Generates random stock between 0 and 100
}));

console.log(products);
