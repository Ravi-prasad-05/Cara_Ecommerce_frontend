document.addEventListener("DOMContentLoaded",()=>{
    const products = [
    {
        fimg: "img/products/f1.jpg",
        nimg: "img/products/n1.jpg",
    },
    {
        fimg: "img/products/f2.jpg",
        nimg: "img/products/n2.jpg",
    },
    {
        fimg: "img/products/f3.jpg",
        nimg: "img/products/n3.jpg",
    },
    {
        fimg: "img/products/f4.jpg",
        nimg: "img/products/n4.jpg",
    },
    {
        fimg: "img/products/f5.jpg",
        nimg: "img/products/n5.jpg",
    },
    {
        fimg: "img/products/f6.jpg",
        nimg: "img/products/n6.jpg",
    },
    {
        fimg: "img/products/f7.jpg",
        nimg: "img/products/n7.jpg",
    },
    {
        fimg: "img/products/f8.jpg",
        nimg: "img/products/n8.jpg",
    }


];


const fproductContainer = document.querySelector(".product-container")

let fproductHTML = ""

products.forEach((product) => {
    fproductHTML = fproductHTML + `
    <div class="pro">
                <img src="${product.fimg}" class="pro-img" alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i class="fa-regular fa-cart-shopping cart"></i></a>
            </div>`
})

fproductContainer.innerHTML += fproductHTML


const nproductContainer = document.querySelector(".nimg")

const nproductsHTML = products.map((product) => {
    return `<div class="pro">
                <img src="${product.nimg}" class="pro-img" alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i class="fa-regular fa-cart-shopping cart"></i></a>
            </div>`
}).join("") //without the join method its convert this in to seperate array

nproductContainer.innerHTML += nproductsHTML


const NewLetterSignUpBtn = document.querySelector(".newletter-signUp");
const NewLetterInput = document.querySelector(".newletter-inputfield");

NewLetterSignUpBtn.addEventListener("click", () => {
    
    NewLetterInput.value = ""
    
    
    
})

})