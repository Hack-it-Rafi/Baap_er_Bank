// Deposit Calculation
document.getElementById('DepButton').addEventListener('click', function(){
    const PrevDep = document.getElementById('PrevDepAmount');
    const PreviousDep = parseFloat(PrevDep.innerText);
    // var Amount = document.getElementById('PrevWiDrAmount');
    // const PreviousWiDr = parseFloat(Amount);
    const PrevTot = document.getElementById('PrevTotAmount');
    const PreviousTotal = parseFloat(PrevTot.innerText);

    const DepField = document.getElementById("DepAmount");
    const DepositAmount = DepField.value;
    // const WiDrField = document.getElementById('WiDrAmount');
    // const WithdrawAmount = WiDrField.value;
    // if(typeof DepositAmount != 'number'){
    //     alert('Please Enter Valid Deposit Number');
    //     return;
    // }
    // console.log(typeof DepositAmount);
    const currentDepAmount = PreviousDep+parseFloat(DepositAmount);
    PrevDep.innerText = currentDepAmount;
    const currentTotAmount = PreviousTotal+parseFloat(DepositAmount);
    PrevTot.innerText = currentTotAmount;

    DepField.value = '';
})

// Withdraw Calculation
document.getElementById('WiDrButton').addEventListener('click', function(){
    const PrevWiDr = document.getElementById('PrevWiDrAmount');
    const PreviousWiDr = parseFloat(PrevWiDr.innerText);
    const PrevTot = document.getElementById('PrevTotAmount');
    const PreviousTotal = parseFloat(PrevTot.innerText);
    const WiDrField = document.getElementById('WiDrAmount');
    const WithdrawAmount = parseFloat(WiDrField.value);
    WiDrField.value = '';
    if(isNaN(WithdrawAmount)){
        alert("Please Enter a valid number");
        return;
    }
    if(parseFloat(WithdrawAmount)>PreviousTotal){
        alert('Baper eto Taka nai');
        return;
    }
    const currentWiDrAmount = PreviousWiDr+WithdrawAmount;
    PrevWiDr.innerText = currentWiDrAmount;
    const currentTotAmount = PreviousTotal-WithdrawAmount;
    PrevTot.innerText = currentTotAmount;

    
})