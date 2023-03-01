document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawInput = getInputValueByID('withdraw-field');
    const oldWithdrawText = getTextValueByID('withdraw-total');

    if (isNaN(newWithdrawInput)) {
        alert("TAKA chenona Mammu!! Number Type koro..");
        return;
    }


    const oldBalanceText = getTextValueByID('balance-total');

    if (newWithdrawInput > oldBalanceText) {
        alert("Tomar Baap-er-Bank-e eto TAKA nai!");
        return;
    }

    const currentWithdrawAmount = oldWithdrawText + newWithdrawInput;
    setTextValueByID('withdraw-total', currentWithdrawAmount);

    const currentBalanceTotal = oldBalanceText - newWithdrawInput;
    setTextValueByID('balance-total', currentBalanceTotal);
})