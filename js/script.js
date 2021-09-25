let bill = document.getElementById('bill');
let numOfPeople = document.getElementById('numOfPeople');
let tipAmount = null;
let btnTip = document.querySelectorAll('.btn-tip');
let tipAmountText = document.getElementById('tipAmount');
let total = document.getElementById('total');
let customTip = document.getElementById('custom');
let tip = null;
let resetButton = document.getElementById('resetButton');

const removeActive = function () {
    btnTip.forEach(btn => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
    })
};

btnTip.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tip = e.target.value;
      makingTipAmount();
      removeActive();
      e.target.classList.add('active');
    })
})

customTip.addEventListener('keyup', function() {
    tip = customTip.value;
})

customTip.addEventListener('focus', makeCustomTip)

function makeCustomTip(){
    if(customTip.value){
        tip = customTip.value;
        makingTipAmount();
    }
    removeActive();
}

function makingTipAmount(){
    divideTip = tip / 100;
    tipAmount = Number((bill.value / numOfPeople.value * divideTip).toFixed(1));
    tipAmountText.innerText = "$" + tipAmount;
}

function TotalAmount(){
    parsedTipAmount = parseFloat(tipAmount);
    total.innerText = "$" + Number((bill.value / numOfPeople.value + tipAmount).toFixed(1));
}

[...document.getElementsByTagName('input')].forEach(item => {
    item.addEventListener('keyup', () => {
        makingTipAmount();
        TotalAmount();
        resetButton.classList.add('active');
    });
})

resetButton.addEventListener('click', () => {
    bill.value = null;
    numOfPeople.value = null;
    customTip.value = null;
    removeActive();
})