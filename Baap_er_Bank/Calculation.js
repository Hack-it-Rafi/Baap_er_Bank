// Deposit Calculation
document.getElementById('DepButton').addEventListener('click', function(){
    // const PrevDep = document.getElementById('PrevDepAmount');
    // const PreviousDep = parseFloat(PrevDep.innerText);
    const PreviousDep = getTextElementById('PrevDepAmount');
    // const PrevTot = document.getElementById('PrevTotAmount');
    // const PreviousTotal = parseFloat(PrevTot.innerText);
    const PreviousTotal = getTextElementById('PrevTotAmount');

    // const DepField = document.getElementById("DepAmount");
    // const DepositAmount = DepField.value;
    const DepositAmount = getInputElementById('DepAmount');
    const currentDepAmount = PreviousDep+DepositAmount;
    // PrevDep.innerText = currentDepAmount;
    setTextElementById('PrevDepAmount', currentDepAmount);
    const currentTotAmount = PreviousTotal+DepositAmount;
    // PrevTot.innerText = currentTotAmount;
    setTextElementById('PrevTotAmount', currentTotAmount);

    // DepField.value = '';
})

// Withdraw Calculation
document.getElementById('WiDrButton').addEventListener('click', function(){
    // const PrevWiDr = document.getElementById('PrevWiDrAmount');
    // const PreviousWiDr = parseFloat(PrevWiDr.innerText);
    const PreviousWiDr = getTextElementById('PrevWiDrAmount');
    // const PrevTot = document.getElementById('PrevTotAmount');
    // const PreviousTotal = parseFloat(PrevTot.innerText);
    const PreviousTotal = getTextElementById('PrevTotAmount');
    // const WiDrField = document.getElementById('WiDrAmount');
    // const WithdrawAmount = parseFloat(WiDrField.value);
    const WithdrawAmount = getInputElementById('WiDrAmount');
    // WiDrField.value = '';
    // if(isNaN(WithdrawAmount)){
    //     alert("Please Enter a valid number");
    //     return;
    // }
    if(WithdrawAmount>PreviousTotal){
        alert('Baper eto Taka nai');
        return;
    }
    const currentWiDrAmount = PreviousWiDr+WithdrawAmount;
    // PrevWiDr.innerText = currentWiDrAmount;
    setTextElementById('PrevWiDrAmount', currentWiDrAmount);
    const currentTotAmount = PreviousTotal-WithdrawAmount;
    // PrevTot.innerText = currentTotAmount;
    setTextElementById('PrevTotAmount', currentTotAmount);

    
})