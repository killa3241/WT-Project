import React, { useState, useEffect } from 'react';
import './style.css';
import Shop from './shop';
import { FaCartShopping } from 'react-icons/fa6';
import Navbar from './CartNavbar';
import { useAuthContext } from './useAuthContext'; // Import your authentication context hook

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const { user } = useAuthContext(); // Access user information from authentication context

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const shopItemsData = [{
      class:"TV",
    id:"lg",
    name:"LG 4K UHD TV ",
    price:27990,
    desc:"108 cm (43 inches) 4K Ultra HD Smart LED TV  (Dark Iron Gray):",
    img:"./images/television/lg.jpg"
  },{
      class:"TV",
    id:"lg2",
    name:"LG  NanoCell TV ",
    price:36990,
    desc:"108 cm (43 inches) 4K Ultra HD Smart NanoCell TV 43NANO73SQA (Ashed Blue)",
    img:"./images/television/lg2.jpg"
  },{
      class:"TV",
    id:"mi",
    name:"MI A Series HD TV",
    price: 10990,
    desc:"80 cm (32 inches) A Series HD Ready Smart Google TV L32M8-5AIN (Black)",
    img:"./images/television/mi.jpg"
  },{
      class:"TV",
      id:"mi2",
      name:"Xiaomi X Series",
      price: 24490,
      desc:"108 cm (43 inches) X Series 4K Ultra HD Smart Android LED TV (Black)",
      img:"./images/television/mi2.jpg"
  },{
      class:"TV",
      id:"samsung",
      name:"Samsung Crystal iSmart",
      price: 63990,
      desc:"163 cm (65 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
      img:"./images/television/samsung.jpg"
  
  },{
      class:"TV",
      id:"samsung2",
      name:"Samsung Crystal 4K Neo",
      price: 28490,
      desc:"108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV (Black)",
      img:"./images/television/samsung2.jpg"
  },{
      class:"TV",
      id:"sony",
      name:"Sony Bravia 4K Ultra HD",
      price: 52990,
      desc:"139 cm (55 inches) 4K Ultra HD Smart LED Google TV (Black)",
      img:"./images/television/sony.jpg"
  },{
      class:"TV",
      id:"sony2",
      name:"Sony Bravia 4K Ultra HD ",
      price: 81990,
      desc:"164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)",
      img:"./images/television/sony2.jpg"
  },{
      class:"TV",
      id:"toshiba",
      name:"TOSHIBA 4K Ultra HD",
      price:45990,
      desc:"139 cm (55 inches) 4K Ultra HD Smart Mini LED TV 55M650MP (Black)",
      img:"./images/television/toshiba.jpg"
  },{
      class:"TV",      
      id:"toshiba2",
      name:"TOSHIBA V Series HD",
      price:11490,
      desc:"80 cm (32 inches) V Series HD Ready Smart Android LED TV 32V35MP (Black)",
      img:"./images/television/toshiba2.jpg"
  },{
        class:"Laptop",
      id:"aceraspire",
      name:"Acer Aspire 5",
      price:51990,
      desc:"Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) (15.6 FHD Display, 1.8 Kg)",
      img:"./images/laptop/AcerAspire5.png"
  },{
        class:"Laptop",
      id:"applemacbook",
      name:"Apple MacBook Air",
      price:69990,
      desc:"13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver",
      img:"./images/laptop/AppleMacbookAirM1.png"
  },{
        class:"Laptop",
      id:"asusrog",
      name:"ASUS Rog Zephyrus M16",
      price:214990,
      desc:"16 Inches 2K Qhd 165Hz/3Ms, Intel Core I9-12900H 12Th Gen, RTX 3080 Ti 16Gb Graphics, Gaming Laptop (32Gb/2Tb Ssd/Windows 11 Home/Black/2 Kg)",
      img:"./images/laptop/ASUSRogZephyrusM16(2022).jpg"
  },{
        class:"Laptop",
      id:"asusvivo",
      name:"ASUS Vivobook 15",
      price:61990,
      desc:"Intel Core i5-1335U 13th Gen, 15.6 (39.62 cm) FHD, Thin and Light Laptop (16GB/512GB/Win11/Office 2021/Fingerprint/Silver/1.7 kg)",
      img:"./images/laptop/ASUSVivobook15.png"
  },{
        class:"Laptop",
      id:"dellg15",
      name:"Dell G15 5520",
      price:70990,
      desc:"Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA RTX 3050 (4GB GDDR6),Win 11,Dark Shadow Grey,2.81kg",
      img:"./images/laptop/DellG155520.png"
  },{
        class:"Laptop",
      id:"dellalien",
      name:"Dell Gaming Alienware m15 R7",
      price:109990,
      desc:"AMD Ryzen 7-6800H/ 16GB/ 512GB SSD/ NVIDIA RTX 3060 6GB/ Win 11",
      img:"./images/laptop/DellGamingAlienwarem15R7.png"
  },{
      class:"Laptop",
      id:"hpenvy",
      name:"HP Envy x360",
      price:113850,
      desc:"12th Gen Intel Core i7-13.3 inch(33.8 cm)(16GB RAM/512GB SSD/400 nits/Win 11/Intel Iris Xe GraphicsZenvo Pen/MSO/1.32Kg)",
      img:"./images/laptop/HPEnvyx360.jpg"
  },{
      class:"Laptop",
      id:"lenovothinkpad",
      name:"Lenovo ThinkPad E14",
      price:97990,
      desc:"Intel Core i7 12th Gen(16GB RAM/1TB SSD/Windows 11 Home/MS Office H&S 2021/Black/1.59 kg)",
      img:"./images/laptop/LenovoThinkPadE14.jpg"
  },{
      class:"Laptop",
      id:"msi",
      name:"MSI Crosshair 15",
      price:125990,
      desc:"Intel i7 12700H-3.5 GHz Max Boost 4.7 GHz, 16GB DDR4, 1TB NVMe SSD, Nvidia RTX 3070-8GB GDDR6, Backlit, Windows 11",
      img:"./images/laptop/MSICrosshair15B12UGZ.jpg"
  },{
      class:"Laptop",
      id:"lenovolegion",
      name:"Lenovo Legion 5 Pro",
      price:119990,
      desc:"AMD Ryzen 7 5800H 16 (40.64cm) QHD IPS 165Hz 500Nits Gaming Laptop (32GB/1TB SSD/Win 11/NVIDIA RTX 3070 8GB/Storm Grey/2.45Kg)",
      img:"./images/laptop/LenovoLegion5Pro.jpg"
  },{
        class:"HomeApp",
      id:"lgairc",
      name:"LG RS-H19VNXE",
      price:46990,
      desc:"Split AC, Super Convertible 5-in-1, Hot & Cold, with Anti Virus Protection",
      img:"./images/homeappliances/air-conditioner.png"
  },{  
      class:"HomeApp",
      id:"dishw",
      name:"Neptune Bl",
      price:49391,
      desc:"Unique Spray Action, Hot Water Wash, Built-In Water Softener",
      img:"./images/homeappliances/dishwasher.png"
  },{  
      class:"HomeApp",
      id:"cfan",
      name:"Havells Stealth Air",
      price:6899,
      desc:"1200mm BLDC motor and Remote Controlled Ceiling Fan Pearl White",      
      img:"./images/homeappliances/ceilingfan.jpg"
  },{  
      class:"HomeApp", 
      id:"grinder",
      name:"Butterfly Rhino",
      price:3999,
      desc:"Table Top Grinder 2L, (Grey) 150W, 230V, AC 50Hz",
      img:"./images/homeappliances/grinder.jpg"
  },{  
      class:"HomeApp", 
      id:"steamiron",
      name:"Philips GC1905",
      price:1399,
      desc:"1440-Watt Steam Iron with Spray",
      img:"./images/homeappliances/steamiron.jpg"
  },{   
      class:"HomeApp",
      id:"moven",
      name:"Samsung SlimFry",
      price:15850,
      desc:"28L SlimFry™, Convection Microwave Oven, 28L",
      img:"./images/homeappliances/microwave.png"
  },{   
      class:"HomeApp",
      id:"mixergrinder",
      name:"Prestige Endura",
      price:6698,
      desc:"1000W Mixer Grinder, 6 Jars (1500 ml, 1000 ml, 1500 ml, 450 ml) (Black, Silver)",
      img:"./images/homeappliances/mixergrinder.jpg"
  },{   
      class:"HomeApp",
      id:"crobot",
      name:"Eufy by Anker",
      price:8999,
      desc:"Robot Vacuum Cleaner, Super-Thin",
      img:"./images/homeappliances/crobot.jpg"
  },{  
      class:"HomeApp", 
      id:"mfridge",
      name:"Haier 42L",
      price:9990,
      desc:"Direct-cool Refrigerator, 42 Litres, 5 Stars",
      img:"./images/homeappliances/mfridge.jpg"
  },{ 
      class:"HomeApp",  
      id:"swmaker",
      name:"Morphy Richards Sandwich Maker",
      price:3238,
      desc:"3 IN 1 750 Watt Sandwich Maker With changable Plate/ Multi Grill",
      img:"./images/homeappliances/swmaker.jpg"
  },
  {
    class:"Electronics",  
    id:"ram",
    name:"Crucial RAM 16GB ",
    price:2640,
    desc:" DDR4 3200 MHz CL22 Laptop Memory CT16G4SFRA32A",
    img:"./images/ElectronicGadgets/Ram.jpg"
  },{
    class:"Electronics",
    id:"mouse",
    name:"Logitech Mouse",
    price:3999,
    desc:" M331 Silent Plus Wireless Mouse, 2.4GHz with USB Nano Receiver, 1000 DPI Optical Tracking, 3 Buttons,Black",
    img:"./images/ElectronicGadgets/LogitechMouse.jpg"
  },{
    class:"Electronics",
    id:"speaker",
    name:"Zebronics Newly Launched Pluto 2-2.1",
    price: 1990,
    desc:"Channel Desktop Speaker with 15 watts Output, Bluetooth 5.0, USB, mSD, FM, 3.5mm Jack Line Input, Inbuilt Volume Control, USB Powered, RGB Lights",
    img:"./images/ElectronicGadgets/Speaker.jpg"
  },{
      class:"Electronics",
      id:"ExtensionBoard",
      name:"Havells 240V",
      price: 329,
      desc:"Havells 240V 6A Four-Way 1440W Extension Board With wire (White)- 1.5 Metre ( Surge and Spike Guard)",
      img:"./images/ElectronicGadgets/ExtensionBoard.jpg"
  },{
      class:"Electronics",
      id:"CPUFan",
      name:"Lian Li UNI Fan",
      price: 30110,
      desc:"Lian Li UNI Fan SL-INF 120 RGB Infinity Mirror ARGB Fan 120mm White 3-Pack Controller",
      img:"./images/ElectronicGadgets/CPUFan.jpg"
  
  },{
      class:"Electronics",
      id:"GPU",
      name:"ASUS Rog Strix Geforce ",
      price: 233959,
      desc:"ASUS Rog Strix Geforce RTX 4090 White OC Edition Gaming Graphics Card 24GB",
      img:"./images/ElectronicGadgets/GPU4090.jpg"
  },{
      class:"Electronics",
      id:"Keyboard",
      name:"Keychron K2",
      price: 10999,
      desc:"Aluminium Frame - Hot-Swappable - Brown Switch | Wireless Bluetooth/USB Wired Mechanical Keyboard, N-Key Rollover",
      img:"./images/ElectronicGadgets/Keyboard.jpg"
  },{
    class:"Electronics",
      id:"PSU",
      name:"Antec HCG Gaming Series ",
      price: 9800,
      desc:"750W Power Supply 750 Watts 80 Plus Gold PSU with Full Modular, 120mm FDB Fan, Japanese Capacitors",
      img:"./images/ElectronicGadgets/PSU.jpg"
  },{
    class:"Electronics",
      id:"WritingPad",
      name:"HUION Drawing Tablet",
      price:2300,
      desc:"Battery-Free Stylus with 6.3 x 4 inch Working Area Pen Tablet for Linux, Mac, Windows PC and Android",
      img:"./images/ElectronicGadgets/WritingPad.jpg"
  },{
    class:"Electronics",
      id:"Soundbar",
      name:"Samsung Soundbar",
      price:23990,
      desc:"5.1 Channel, Wireless Subwoofer, 1x Wireless Rear Speaker, 1x Center Speaker and Energy Star, Dolby 5.1ch (Black)",
      img:"./images/ElectronicGadgets/Soundbar.jpg"
  },{
    class:"Console",
      id:"gameboy",
      name:"Handheld Game Console",
      price:649,
      desc:"VGRASSP Retro Mini Game with 400 Classic Sup Game TV Compatible for Kids, Rechargeable 8 Bit Classic",
      img:"./images/Gaming/Gameboy.jpg"
  },{
    class:"Console",
      id:"PS4",
      name:"PS4",
      price:32999,
      desc:"Sony PS4 Slim 500 GB Console",
      img:"./images/Gaming/PS4.jpg"
  },{
    class:"Console",
      id:"PS5",
      name:"PS5",
      price:58990,
      desc:"Sony PS5 Standard DualSense bundle  ",
      img:"./images/Gaming/PS5.jpg"
  },{
    class:"Console",
      id:"XBOX",
      name:"XBOX S",
      price:61990,
      desc:"XBOX S Series 512GB",
      img:"./images/Gaming/XBOXS.jpg"
  },{
    class:"Console",
      id:"Steam",
      name:"Steam Deck",
      price:55990,
      desc:"Steam Deck Wi-Fi 256GB Console, Black",
      img:"./images/Gaming/SteamDeck.jpg"
  },{
    class:"Console",
      id:"Switch",
      name:"Nintendo Switch",
      price:30899,
      desc:"Nintendo Switch OLED model",
      img:"./images/Gaming/NintendoSwitch.jpg"
  },{
    class:"Console",
      id:"Steering",
      name:"Logitech G29 Driving",
      price:36000,
      desc:"Logitech G29 Driving Force Racing Wheel and G Driving Force shifter Joystick",
      img:"./images/Gaming/SteeringWheel.jpg"
  },{
    class:"Console",
      id:"PSP",
      name:"PSP",
      price:990,
      desc:"Sony PSP (2000/3000) PlayStation Portable Display",
      img:"./images/Gaming/PSP.jpg"
  },{
    class:"Console",
      id:"Cartridge",
      name:"Mini TV Game Console",
      price:1400,
      desc:"Gaming Player AV Output Game Console |Gifts to Kids (Cartridge not Required)|620 games ",
      img:"./images/Gaming/CartridgeConsole.jpg"
  },{
    class:"Console",
      id:"Jugaad",
      name:"Omeron Mini TV Console",
      price:3300,
      desc:"Stick 2.4g Wireless Gamepad Controller USB Built-in 3000 Classic Games Wireless Console Game Stick Video Game Console",
      img:"./images/Gaming/Jugaad.jpg"
  }
    

  ];
  const [sortedItems, setSortedItems] = useState(shopItemsData);

  const handleSortChange = (className) => {
    const sorted = shopItemsData.filter((item) => item.class === className);
    setSortedItems(sorted);
  };

  return (
    <div className="App">
      <div class='header'>
        <h1>Welcome to Your Shopping Cart</h1>
        <FaCartShopping className="carticon"/>
        <span className="cart-count">{cartCount}</span>
      </div>
      <Navbar onSortChange={handleSortChange} />
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Shop
        shopItemsData={sortedItems}
        incrementCart={incrementCart}
        decrementCart={decrementCart}
      />
    </div>
  );
}

export default Home;
