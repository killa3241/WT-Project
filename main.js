let shop = document.getElementById('shop');

let shopItemsData = [{
  id:"lg",
  name:"LG 4K UHD TV ",
  price:27990,
  desc:"LG 108 cm (43 inches) 4K Ultra HD Smart LED TV  (Dark Iron Gray):",
  img:"television/lg.jpg"
},{
  id:"lg2",
  name:"LG  NanoCell TV ",
  price:36990,
  desc:"LG 108 cm (43 inches) 4K Ultra HD Smart NanoCell TV 43NANO73SQA (Ashed Blue)",
  img:"television/lg2.jpg"
},{
  id:"mi",
  name:"MI A Series HD TV",
  price: 10990,
  desc:"MI 80 cm (32 inches) A Series HD Ready Smart Google TV L32M8-5AIN (Black)",
  img:"television/mi.jpg"
},{
    id:"mi2",
    name:"Xiaomi X Series",
    price: 24490,
    desc:"Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Android LED TV (Black)",
    img:"television/mi2.jpg"
},{
    id:"samsung",
    name:"Samsung Crystal iSmart",
    price: 63990,
    desc:"Samsung 163 cm (65 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
    img:"television/samsung.jpg"

},{
    id:"samsung2",
    name:"Samsung Crystal 4K Neo",
    price: 28490,
    desc:"Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV (Black)",
    img:"television/samsung2.jpg"
},{
    id:"sony",
    name:"Sony Bravia 4K Ultra HD",
    price: 52990,
    desc:"Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV (Black)",
    img:"television/sony.jpg"
},{
    id:"sony2",
    name:"Sony Bravia 4K Ultra HD ",
    price: 81990,
    desc:"Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)",
    img:"television/sony2.jpg"
},{
    id:"toshiba",
    name:"TOSHIBA 4K Ultra HD",
    price:45990,
    desc:"TOSHIBA 139 cm (55 inches) 4K Ultra HD Smart Mini LED TV 55M650MP (Black)",
    img:"television/toshiba.jpg"
},{
    id:"toshiba2",
    name:"TOSHIBA V Series HD",
    price:11490,
    desc:"TOSHIBA 80 cm (32 inches) V Series HD Ready Smart Android LED TV 32V35MP (Black)",
    img:"television/toshiba2.jpg"
}]

let generateShop=()=>{
  return (shop.innerHTML=shopItemsData.map((x)=>{
    let {id,name,price,desc,img}= x;
    return `<div id=product-id-${id} class="item">
    <img width="220" src=${img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>₹ ${price}</h2>
            <div class="buttons">
                <i class="bi bi-dash-square" onclick=""></i>
                <div id=${id} class="quantity">0</div>
                <i class="bi bi-plus-square"></i>

            </div>
        </div>
    </div>
</div>`
  }).join(""))
}
generateShop()
let increment = ()=>{

}


let decrement = ()=>{
  
}


let update= ()=>{
  
}
