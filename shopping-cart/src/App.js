import React from 'react';
import './style.css';
import Shop from './shop';
import {FaCartShopping} from "react-icons/fa6";
import Navbar from './CartNavbar';


function App() {
  const shopItemsData = [{
    id:"lg",
    name:"LG 4K UHD TV ",
    price:27990,
    desc:"108 cm (43 inches) 4K Ultra HD Smart LED TV  (Dark Iron Gray):",
    img:"./images/television/lg.jpg"
  },{
    id:"lg2",
    name:"LG  NanoCell TV ",
    price:36990,
    desc:"108 cm (43 inches) 4K Ultra HD Smart NanoCell TV 43NANO73SQA (Ashed Blue)",
    img:"./images/television/lg2.jpg"
  },{
    id:"mi",
    name:"MI A Series HD TV",
    price: 10990,
    desc:"80 cm (32 inches) A Series HD Ready Smart Google TV L32M8-5AIN (Black)",
    img:"./images/television/mi.jpg"
  },{
      id:"mi2",
      name:"Xiaomi X Series",
      price: 24490,
      desc:"108 cm (43 inches) X Series 4K Ultra HD Smart Android LED TV (Black)",
      img:"./images/television/mi2.jpg"
  },{
      id:"samsung",
      name:"Samsung Crystal iSmart",
      price: 63990,
      desc:"163 cm (65 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
      img:"./images/television/samsung.jpg"
  
  },{
      id:"samsung2",
      name:"Samsung Crystal 4K Neo",
      price: 28490,
      desc:"108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV (Black)",
      img:"./images/television/samsung2.jpg"
  },{
      id:"sony",
      name:"Sony Bravia 4K Ultra HD",
      price: 52990,
      desc:"139 cm (55 inches) 4K Ultra HD Smart LED Google TV (Black)",
      img:"./images/television/sony.jpg"
  },{
      id:"sony2",
      name:"Sony Bravia 4K Ultra HD ",
      price: 81990,
      desc:"164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)",
      img:"./images/television/sony2.jpg"
  },{
      id:"toshiba",
      name:"TOSHIBA 4K Ultra HD",
      price:45990,
      desc:"139 cm (55 inches) 4K Ultra HD Smart Mini LED TV 55M650MP (Black)",
      img:"./images/television/toshiba.jpg"
  },{
      id:"toshiba2",
      name:"TOSHIBA V Series HD",
      price:11490,
      desc:"80 cm (32 inches) V Series HD Ready Smart Android LED TV 32V35MP (Black)",
      img:"./images/television/toshiba2.jpg"
  },{
      id:"aceraspire",
      name:"Acer Aspire 5",
      price:51990,
      desc:"Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) (15.6 FHD Display, 1.8 Kg)",
      img:"./images/laptop/AcerAspire5.png"
  },{
      id:"applemacbook",
      name:"Apple MacBook Air",
      price:69990,
      desc:"13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver",
      img:"./images/laptop/AppleMacbookAirM1.png"
  },{
      id:"asusrog",
      name:"ASUS Rog Zephyrus M16",
      price:214990,
      desc:"16 Inches 2K Qhd 165Hz/3Ms, Intel Core I9-12900H 12Th Gen, RTX 3080 Ti 16Gb Graphics, Gaming Laptop (32Gb/2Tb Ssd/Windows 11 Home/Black/2 Kg)",
      img:"./images/laptop/ASUSRogZephyrusM16(2022).jpg"
  },{
      id:"asusvivo",
      name:"ASUS Vivobook 15",
      price:61990,
      desc:"Intel Core i5-1335U 13th Gen, 15.6 (39.62 cm) FHD, Thin and Light Laptop (16GB/512GB/Win11/Office 2021/Fingerprint/Silver/1.7 kg)",
      img:"./images/laptop/ASUSVivobook15.png"
  },{
      id:"dellg15",
      name:"Dell G15 5520",
      price:70990,
      desc:"Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA RTX 3050 (4GB GDDR6),Win 11,Dark Shadow Grey,2.81kg",
      img:"./images/laptop/DellG155520.png"
  },{
      id:"dellalien",
      name:"Dell Gaming Alienware m15 R7",
      price:109990,
      desc:"AMD Ryzen 7-6800H/ 16GB/ 512GB SSD/ NVIDIA RTX 3060 6GB/ Win 11",
      img:"./images/laptop/DellGamingAlienwarem15R7.png"
  },{
      id:"hpenvy",
      name:"HP Envy x360",
      price:113850,
      desc:"12th Gen Intel Core i7-13.3 inch(33.8 cm)(16GB RAM/512GB SSD/400 nits/Win 11/Intel Iris Xe GraphicsZenvo Pen/MSO/1.32Kg)",
      img:"./images/laptop/HPEnvyx360.jpg"
  },{
      id:"lenovothinkpad",
      name:"Lenovo ThinkPad E14",
      price:97990,
      desc:"Intel Core i7 12th Gen(16GB RAM/1TB SSD/Windows 11 Home/MS Office H&S 2021/Black/1.59 kg)",
      img:"./images/laptop/LenovoThinkPadE14.jpg"
  },{
      id:"msi",
      name:"MSI Crosshair 15",
      price:125990,
      desc:"MIntel i7 12700H-3.5 GHz Max Boost 4.7 GHz, 16GB DDR4, 1TB NVMe SSD, Nvidia RTX 3070-8GB GDDR6, Backlit, Windows 11",
      img:"./images/laptop/MSICrosshair15B12UGZ.jpg"
  },{
      id:"lenovolegion",
      name:"Lenovo Legion 5 Pro",
      price:119990,
      desc:"AMD Ryzen 7 5800H 16 (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (32GB/1TB SSD/Win 11/NVIDIA RTX 3070 8GB/Storm Grey/2.45Kg)",
      img:"./images/laptop/LenovoLegion5Pro.jpg"
  }

  ];

  return (
    <div className="App">
      <div class='header'>
        <h1>Welcome to Your Shopping Cart</h1>
        <FaCartShopping className="carticon"/>
        </div>
    <Navbar/>
      <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
      <Shop shopItemsData={shopItemsData} />
    </div>
  );
}

export default App;
