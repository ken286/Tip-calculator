const btn = document.getElementById("btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
    setTimeout( () => {
        error.style.display = "none";
    }, 5000

    )
};

const calculateTip = (e) => {
    e.preventDefault();
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;
  

  if (bill == "" || rate == ""){
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)){
    error.innerHTML = "please enter a number";
    hideError();
  } else {
    let tipAnt = bill + rate;
    tipAnt = Math.ceil(tipAnt);
    tip.innerHTML = `Tip:$  ${tipAnt}`;

    let totalBill = Number(bill) + tipAnt;
    total.innerHTML = `Total Bill:$${totalBill}`;
  }
};


btn.addEventListener("click", calculateTip);