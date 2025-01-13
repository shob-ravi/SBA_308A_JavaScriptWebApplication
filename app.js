// import {dis_prod} from './DisplayProducts.js';
import * as disProd from "./DisplayProducts.js";
import * as filProd from "./SearchProduct.js";

const searchBarEl = document.querySelector(".search-bar");
document.addEventListener('DOMContentLoaded', () => {
    const categoryItemsEl = document.querySelector(".categories-item");
    const categorylistEl = document.getElementById("category-list");

    categoryItemsEl.addEventListener("click", (event) => {
        event.stopPropagation();
        const isVisible = categorylistEl.style.display === 'block';
        categorylistEl.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            loadCategories();
        }
    });


    document.addEventListener('click', () => {
        categorylistEl.style.display = 'none';
    })


    // const mainContentGridEl =document.querySelector(".mainContent-grid");

    async function loadCategories() {
        categorylistEl.innerHTML = '';
        const results = await getCategories();
        console.log('results:' + results);
        results.forEach(element => {
            const listEl = document.createElement('li');
            listEl.textContent = element;
            listEl.addEventListener('click', () => {
                fetchProducts(element);
            })
            categorylistEl.appendChild(listEl);

        });
    }

    async function getCategories() {
        try {
            // return ["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"];
            const category_list = await fetch('https://fakestoreapi.com/products/categories');
            if (!category_list.ok) throw new Error("Failed to fetch categories.");
            const category_list_result = await category_list.json();
            console.log('category_list:' + category_list_result);
            if (category_list_result.length==0) {return ["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"];}
            else {return category_list_result;}
        } catch (error) {
            console.error("Error fetching categories:", error);
            return [];  // Return an empty array in case of error

        }

    }
    //loadCategories();
    async function fetchProducts(element) {
        // console.log('element:' +element);
        const product_list = await fetch('https://fakestoreapi.com/products/category/' + element)
        console.log(product_list);
        const product_list_result = await product_list.json();

        console.log('product_list:' + product_list_result);
        // const product_list_final_result=JSON.stringify(product_list_result)

        disProd.displayProducts(product_list_result);
    }
})


const btnSearchEl = document.getElementById('btnSearch');
btnSearchEl.addEventListener('click', () => {
    const searchText = searchBarEl.value;
    console.log("searchText:" + searchText);
    if (searchText) {
        searchFunction(searchText.toLowerCase());
    }

});

async function searchFunction(searchText) {
    console.log('inside btn search');
    const results = await filProd.filterProduct(searchText);
    console.log("results:::" + results);
    disProd.displayProducts(results);
}


