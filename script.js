

const fil = "https://kea-alt-del.dk/t7/api/products";


function hentData(){
    fetch(fil)
      .then((respons) => respons.json())
      .then(visData)
  
  }



const temp = document.querySelector(".productTemplate").content;
const beholder = document.querySelector(".product_list")

function visData(data){
      console.log(data)
      data.forEach(object => {
  //// kloning her //
const klon = temp.cloneNode(true);

  klon.querySelector(".productdisplayname").textContent = object.productdisplayname;
  klon.querySelector(".brandname").textContent = object.brandname;
  klon.querySelector(".price").textContent = object.price;
  klon.querySelector("img").src = object.price;

    
  //ammend her//
beholder.appendChild(klon);
  
      } )
  
  }


hentData();