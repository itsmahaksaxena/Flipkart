//array of object

const ElectronicProduct = [
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70",
        name : "Best of Hair Dryers",
        price : "Min. 50% Off",
        brand : "Philips, Nova,Havells",
    },

    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
        name : "Top Mirrorless Cameras",
        price : "Shop Now!",
        brand : "Canon,Sony,Fujiflim...",
    },
    {
        imgurl : "https://rukminim1.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70",
        name : "Best Of Trimmer",
        price : "From ₹399",
        brand : "realme,Mi,Philips & more",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70",
        name : "Premium PowerBanks",
        price : "Shop Now",
        brand : "Mi,realme & more",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
        name : "Best of Shavers",
        price : "From ₹1,649",
        brand : "Philips & Havells",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/kkh6zrk0/monitor/p/w/q/xl2546k-xl2546k-benq-original-imafzthb6ztpfjr8.jpeg?q=70",
        name : "BenQ Monitors",
        price : "From ₹9990",
        brand : "Top rated",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
        name : "Monitor",
        price : "From ₹8279",
        brand : "DELL",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
        name : "Printers",
        price : "From ₹3999",
        brand : "Top Rated",
    },
    {
        imgurl :"https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
        name : "Monitors",
        price : "From ₹9999",
        brand : "SAMSUNG",
    },
   
]
let renderProduct;
let cardProductContainer = document.getElementById("card-product-container")
for(let i=0; i < ElectronicProduct.length; i++) {
    console.log(ElectronicProduct[0].name)
   renderProduct +=
    <div class = "card-product">
        <img src="${ElectronicProduct[i].imgurl}">
      </img>
      <h3 class="card-product-name">${ElectronicProduct[i].name}</h3>
      <p class="card-product-price">${ElectronicProduct[i].price} </p>
      <p class="card-product-desc">${ElectronicProduct[i].brand}</p>
    </div>
}

cardProductContainer.innerHTML = renderProduct;
