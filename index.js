let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {

    fetch_data()
    console.log("click")

})

let fetch_data= async()=> {
    try {
       
    
        let data = await fetch('https://bored-api.appbrewery.com/random')
       

      
        if (data.ok) {
            data = await data.json()
            console.log(data)
            generate(data)
         
        }else{
            throw new Error('Fetch request failed');
        }

    }catch(error){
        console.error('Fetch Error:', error);
        
    }
   


}
let title=document.querySelector(".title")
let type=document.querySelector(".type")
let participants=document.querySelector(".participants")
let price=document.querySelector(".price")
let accessibility=document.querySelector(".accessibility")

function  generate(data){
    console.log(data.activity)
    document.querySelector(".title").textContent=data.activity
    document.querySelector(".type").textContent=data.type
    document.querySelector(".participants").textContent=data.
    participants
    document.querySelector(".price").textContent=data.
    price
    document.querySelector(".accessibility").textContent=data.availability
   






}






