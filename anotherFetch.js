
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }




        const products = await response.json();

        products.forEach(product => {
            console.log(`Tittle ${product.title}`)
            console.log(`price ${product.price}`)
            console.log(`image ${product.image}`)
        })
        const totalPrice = products.reduce((sum, product) => {
           return sum + product.price
        }, 0)
    }

   catch (err) {
        console.log('Fetch error',err)
    }
}