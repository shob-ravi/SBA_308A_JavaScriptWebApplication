const productFormEl = document.getElementById('productForm');
const titleEl = document.getElementById('title');
const priceEl = document.getElementById('price');
const descriptionEl = document.getElementById('description');
const categoryEl = document.getElementById('category');

function saveProduct(event) {
    event.preventDefault();

    // const productInput = {
    //     title: titleEl.value,
    //     body: descriptionEl.value,
    //     userId: priceEl.value,
    // };
    const productInput = {
        title: titleEl.value,
        price: titleEl.value,
        description: descriptionEl.value,
        image: 'https://t3.ftcdn.net/jpg/02/57/16/84/360_F_257168460_AwhicdEIavp7bdCbHXyTaBTHnBoBcZad.jpg',
        category: categoryEl.value
    };
    const results = addNewProduct(productInput);
}


// function addNewProduct(inputProduct) {
//     try {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: "POST",
//             body: JSON.stringify(inputProduct),
//             headers: {
//               "Content-type": "application/json; charset=UTF-8"
//             }
//         }).then(response => response.json())
//             .then(json => {
//                 console.log("POST Operation Results::" + JSON.stringify(json));
//             })

//     }
//     catch (err) {
//         console.log("error:" + err)
//     }
// }

async function addNewProduct(inputProduct) {
    console.log("Input parameters: " + JSON.stringify(inputProduct));

    try {
        await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(inputProduct),
                         headers: {
                           "Content-type": "application/json; charset=UTF-8"
                         }
        }).then(response => response.json())
            .then(json => {
                console.log("POST Operation Results::" + JSON.stringify(json));
            })
    }
    catch (err) {
        console.log("error:" + err)
    }
}
