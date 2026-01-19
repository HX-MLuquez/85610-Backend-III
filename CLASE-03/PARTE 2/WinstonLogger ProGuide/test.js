

var products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 400 }
];

function extraeProductobyId(id) {
    return products.find(product => product.id === id);
}

console.log(extraeProductobyId(2)); // { id: 2, name: 'Smartphone', price: 800 }

module.exports = { products };