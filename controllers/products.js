
const getProductsStatic = (req, res) => {
    throw new Error('Testing async errors');
    res.send('Product Static Route');
}

const getAllProducts = (req, res) => {
    res.send('All Product Route');
}

module.exports = {getAllProducts, getProductsStatic};