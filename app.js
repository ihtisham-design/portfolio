// menu-button
const menuButton = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click',function(){
    nav.classList.add('nav-active')
});
menuClose.addEventListener('click',function(){
    nav.classList.remove('nav-active')
});




const card = document.querySelector(".card-container");
var slider_img = [
    "./photos/Audionic-Habib-Metro-Discount.jpg",
    "./photos/blog_orient_sale.webp",
    "./photos/CO_46pH58YwDEAE=.webp",
    "./photos/images.jpeg",
    "./photos/savings_blog_header (1) (1).png"
]
var i=0;
document.getElementById("img1").src = slider_img[i];
slider_img[i];
var slider = setInterval(next , 5000);
function next(){

    document.getElementById("img1").src = slider_img[++i];
    if(i==slider_img.length){
        i=0;
        document.getElementById("img1").src = slider_img[i];
    }
    clearInterval(slider);
    slider = setInterval(next , 5000);
}
function pre(){
    document.getElementById("img1").src = slider_img[--i];
    if(i < 0){
        i = slider_img.length-1;
        document.getElementById("img1").src = slider_img[i];
    }
    clearInterval(slider);
    slider = setInterval(next , 5000);
}


//card array

var productData = [
    {
        id:1,
        img:"./project images/fridge-1.webp",
        name:"Refidgerator",
        price:55000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:2,
        img:"./project images/camera-1.webp",
        name:"Canon Camera",
        price:8000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:3,
        img:"./project images/laptop-1.webp",
        name:"Hp laptop",
        price:65000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:4,
        img:"./project images/mixer-1.webp",
        name:"Mixer",
        price:5000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:5,
        img:"./project images/mouse-1.webp",
        name:"Mouse",
        price:500,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:5,
        img:"./project images/smartphone-1.webp",
        name:"Realme C21Y ",
        price:25000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:7,
        img:"./project images/tv-02.webp",
        name:"Tv",
        price:22000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:8,
        img:"./project images/washing machine-1.webp",
        name:"Washig Machine",
        price:30000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:9,
        img:"./project images/watch-1.webp",
        name:"Watch",
        price:5000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
    {
        id:10,
        img:"./project images/laptop-3.webp",
        name:"laptop",
        price:70000,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo porro tempora totam assumenda. Cum suscipit temporibus neque harum officiis maxime quam veritatis sapiente in soluta, praesentium ipsam labore illum!"
    },
];

var displayingAll = (array) => {
    var display = array.map((item) => {
        return`
        <div class="card">
            <div class="card-img">
                <img src="${item.img}" height="200px" alt="">
            </div>
            </br>
            <div class="card-body">
                <div>
                    <h2 class="card-title">${item.name}</h2>
                    <h2 class="card-prize">Pkr/- ${item.price}</h2>
                    <button id="cart">Add to cart</button>
                    <button id="buy">Order now</button>
                    <p class="card-discription">
                        <details>
                            <summary id = "card-discription">Product Discription</summary>
                            <p>${item.discription}</p>
                        </details>
                    </p>
                </div>
            </div>
        </div>`
    });
    card.innerHTML=display.join("");
};

displayingAll(productData);


