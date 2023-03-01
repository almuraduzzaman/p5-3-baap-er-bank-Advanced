document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositInput = getInputValueByID('deposit-field');
    const oldDepositText = getTextValueByID('deposit-total');

    if (isNaN(newDepositInput)) {
        alert("TAKA chenona Mammu!! Number Type koro..");
        return;
    }

    const currentDepositAmount = oldDepositText + newDepositInput;
    setTextValueByID('deposit-total', currentDepositAmount);

    const oldBalanceText = getTextValueByID('balance-total');
    const currentBalanceTotal = oldBalanceText + newDepositInput;
    setTextValueByID('balance-total', currentBalanceTotal);
})