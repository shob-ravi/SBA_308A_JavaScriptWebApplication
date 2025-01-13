const categorylistEl = document.getElementById("category-list");
const mainContentGridEl =document.querySelector(".mainContent-grid");

async function loadCategories(){
    
    const results = await getCategories();
    console.log('results:' + results);
    results.forEach(element => {
        const listEl = document.createElement('li');        
        listEl.textContent = element;
        listEl.addEventListener('click',()=>{
            fetchProducts(element);
        })
        categorylistEl.appendChild(listEl);

    });
}

async function getCategories(){
    const category_list=  await fetch('https://fakestoreapi.com/products/categories');
    const category_list_result = await category_list.json();
    console.log('category_list:' + category_list_result);
       
    return category_list_result;
}
loadCategories();
async function fetchProducts(element){
    // console.log('element:' +element);
    const product_list = await fetch('https://fakestoreapi.com/products/category/' +element)
    console.log(product_list);
    const product_list_result = await product_list.json();
    
    console.log('product_list:' +product_list_result);
    // const product_list_final_result=JSON.stringify(product_list_result)
    
    displayProducts(product_list_result);
}
function displayProducts(input){
console.log('input.length' +input.length);
    for (const key of input) {
        console.log('key.image:' +key.image);}
    
    mainContentGridEl.innerHTML="";
    input.forEach((ele)=>{
        // list.Array.forEach((ele)=>{
        const productEleCard = document.createElement('div');
        productEleCard.classList.add('product-Ele-Card');

        // Create the image element and set its source
        const productImage = document.createElement('img');
        productImage.src = ele.image; 
        productImage.alt = ele.title; 
        productImage.style.width = '150px'; 
        productImage.style.height = '150px'; 
        productImage.style.objectFit = 'contain'; 
        productEleCard.appendChild(productImage);
        const productTitle = document.createElement('h3');

        // create a product title
        productTitle.textContent = ele.title;
        productEleCard.appendChild(productTitle);

        // create an element for product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${ele.price}`;
        productEleCard.appendChild(productPrice);
        mainContentGridEl.appendChild(productEleCard)    ;
        }  
    )

}
