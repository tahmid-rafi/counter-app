const counterValue = document.querySelector("#counterValue");

const increaseBtn = document.querySelector("#increaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");

let counterNumber = 0;

increaseBtn.addEventListener("click", ()=> {
     counterNumber++;//increase by 1
     counterValue.textContent = counterNumber;
});


resetBtn.addEventListener("click", ()=> {
     counterNumber = 0; //reset to 0
     counterValue.textContent = counterNumber;
})

decreaseBtn.addEventListener("click", ()=> {
     if (counterNumber > 0) { // prevent negative values
         counterNumber--; // decrease by 1
     }
     counterValue.textContent = counterNumber;
});