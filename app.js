const categorylistEl = document.getElementById("category-list");


async function loadCategories(){
    
    const results = await getCategories();
    console.log('results:' + results);
    results.forEach(element => {
        const listEl = document.createElement('li');        
        listEl.textContent = element;
        listEl.addEventListener('click',()=>{
            
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