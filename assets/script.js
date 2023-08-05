const button = document.querySelector(".btn")

function btn (){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

   const sum = Math.floor(Math.random() * (max - min + 1) + min);
   document.querySelector(".result").textContent = sum;
}

button.addEventListener("click",btn)

