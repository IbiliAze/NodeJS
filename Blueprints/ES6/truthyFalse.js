const products = [];
const product = products[1];




// from this
if (product !== undefined) {
    console.log('Product found')
} else {
    console.log('Product not found');
};


// to this
if (product) {
    console.log('Product found')
} else {
    console.log('Product not found');
};

