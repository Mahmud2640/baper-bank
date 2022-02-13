document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotalAmmount = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotalAmmount + depositAmount;
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    depositInput.value = "";
  });

  // handle withdraw button 
  document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdrew click');

    
  })
