const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
const fil = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${id}`;




const url = `https://kea-alt-del.dk/t7/api/products/${id}`


const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`


function hentData(){
fetch(url)
.then((respons) => respons.json())
.then(visProdukt)


}



function visProdukt(produkt){
    console.log(produkt)

   document.querySelector(".productdisplayname").textContent=produkt.productdisplayname;
   document.querySelector(".brandname").textContent=produkt.brandname;
   document.querySelector(".price").textContent=produkt.price;
   document.querySelector(".basecolour").textContent=produkt.basecolour;
   document.querySelector(".gender").textContent=produkt.gender;
   document.querySelector("img").src=imagePath;
}




hentData();







