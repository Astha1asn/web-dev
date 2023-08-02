const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "GUCCI BLONDE MEDIUM",
    price: 2520,
    
  },
  {
    id: 2,
    title: "MINI BAG",
    price: 1649,
    Desc: "Small things can take up a big place in your heart like Gucci mini bags." ,
    colors: [
      {
        img:"https://cdnc.lystit.com/photos/gucci/446744DRW3T1000-black%20leather-342de56d-.jpeg ",
      },
      
    ],
  },
  {
    id: 3,
    title: "HANDLE BAG",
    price: 1829,
    Desc:"Looking for gucci  handlebag online ? Shop for the best gucci  handbag from our collection .",
    colors: [
      {
        img: "https://pngimg.com/uploads/women_bag/women_bag_PNG6410.png",
      },
     
    ],
  },
  {
    id: 4,
    title: "DIANA BAG",
    price: 1229,
    Desc:"Gucci Diana is a leather handbag with bamboo handle designed by the Florence -based luxury fashion house Gucci.",
    colors: [
      {
        
        img: "https://i.pinimg.com/736x/c4/c1/ed/c4c1edb5d15b38ba5b4625b7619b651b.jpg",
      },
     
    ],
  },
  {
    id: 5,
    title: "BELT BAG",
    price:999,
    Desc:"The style is completed by one of Gucci's most historic codes—the Interlocking G. Beige and ebony GG Supreme canvas.",
    colors: [
      {
        
        img: "https://images.stockx.com/images/Gucci-Print-Belt-Bag-Vintage-Logo-Small-Black-Studio-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&trimcolor=ffffff&updated_at=1606320330",
      },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});