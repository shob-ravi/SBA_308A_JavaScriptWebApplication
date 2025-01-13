export function displayProducts(input) {
    try {
        const mainContentGridEl = document.querySelector(".mainContent-grid");
        console.log('input.length' + input.length);
        for (const key of input) {
            console.log('key.image:' + key.image);
        }

        mainContentGridEl.innerHTML = "";
        input.forEach((ele) => {
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
            mainContentGridEl.appendChild(productEleCard);

            const cartBtn = document.createElement('button');
            cartBtn.id = "btnProduct"; // Set an ID for the button
            cartBtn.textContent = "Add to Cart"; // Set the text content
            cartBtn.style.backgroundColor = "red";
            productEleCard.appendChild(cartBtn);
        }
        )
    } catch (error) {
        console.log("Error in displayProducts::" + error);
    }

}