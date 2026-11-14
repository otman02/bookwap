let liver_continer =document.getElementById("livre-continer")



fetch("http://127.0.0.1:8000/api/v1/exchange-requests?status=open")
 .then(res => res.json())
 .then(data => {
   let domands = data.data
   console.log(domands)
   livercard(domands)
 }



 


)
 .catch(err => console.error(err));

 function livercard(domands){
domands.forEach(domand=>{

  console.log(domand.offers)
    
    
     liver_continer.innerHTML+= `

     <div class="flex justify-center items-center gap-1 bg-[#c19a6b] rounded shadow-xl w-120 h-120">
      <div class="flex justify-center items-center border">
             <img src="http://127.0.0.1:8000${domand.book.image_url}" alt="" class=" w-25 h-35 ">
             <div class="w-40 flex flex-col gap-2">
                
                 <p class="text-orange-600">${domand.book.title}</p>
                 <p>${domand.book.author}</p>
                 <p class="${domand.exchange_type==="permanent" ? 'bg-orange-200':'bg-yellow-200'} w-25 rounded-md">${domand.exchange_type}</p>
               </div>

               
             </div>
              
             <div><i class="fa-solid fa-arrow-right-arrow-left"></i></div>

             <div class="flex flex-col gap-4 border rounded-md justify-center items-center">
              
               ${getoffers(domand.offers)}


             </div>
             </div>
     
     `
   })


 }


 function getoffers(offers){
   let offerdbooks=""
   offers.forEach(offer=>{

    if (offer.status==="accepted"){

      offerdbooks+=`
      
       <img src="http://127.0.0.1:8000${offer.offered_book.image_url}" alt="" class=" w-25 h-35 ">
             <div class="w-40 flex flex-col gap-2">
                
                 <p class="text-orange-600">${offer.offered_book.title}</p>
                 <p>${offer.offered_book.author}</p>
               </div>
               
 
      `}
    else {
             
       offerdbooks+=`
      
       <img src="image.png" alt="" class=" w-25 h-35 ">
             <div class="w-40 flex flex-col gap-2">
                <p class="text-orange-600">can you offer a book</p>
                 </div>
                ` }
               
   })
   return offerdbooks
 }
      




