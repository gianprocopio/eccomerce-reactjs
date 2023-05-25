/**
 * This function receive an array of products (objects) and calculates their prices
 * @param {Array} products cartProduct: Array of Objects 
 * @returns {Number} Total price
 */
export const totalPrice = (products) =>{
    return products.reduce((acc, product) => acc + product.price, 0);
}