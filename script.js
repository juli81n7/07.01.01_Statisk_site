

const fil = `https://kea-alt-del.dk/t7/api/products`;


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

const produktid = object.id;
const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${produktid}.webp` 

klon.querySelector(".productdisplayname").textContent = object.productdisplayname;
  klon.querySelector(".brandname").textContent = object.brandname;
  klon.querySelector(".price").textContent = object.price+" DKK";
  klon.querySelector("img").src = imagePath;
    
  //ammend her//
beholder.appendChild(klon);
  
      } )
  
  }


hentData();