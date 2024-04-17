const url="https://pokeapi.co/api/v2/pokemon/";

const btn=document.querySelector("button");
const input=document.querySelector("input");

const front=document.querySelector("#front");

btn.addEventListener("click",async ()=>{

    let info= await axios.get(url+input.value);
  console.log(info);
front.src=await info.data.sprites.front_default;
     

});