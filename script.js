// // Placeholder scripts for illustration, replace with actual functionality

// // 1. Fetch product data from the backend (replace with your actual API call)
// fetch('http://localhost:5000/products')
//     .then(response => response.json())
//     .then(data => {
//         // 2. Generate product list items dynamically
//         const productList = document.getElementById('product-list');
//         data.forEach(product => {
//             const productItem = document.createElement('li');
//             const productImage = document.createElement('img');
//             productImage.src = product.image; // Assuming an "image" property in the product data
//             const productName = document.createElement('span');
//             productName.textContent = product.name;
//             productItem
