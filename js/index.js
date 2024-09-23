document.getElementById('donate-btn')
.addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = document.getElementById('donate-money').value;
    const addMoneyNumber = parseFloat(addMoney);

    if (!isNaN(addMoney) && !isNaN(parseFloat(addMoney)) && parseFloat(addMoney) > 0) {
        const donateBalace = document.getElementById('donate-balance').innerText;
        const donateBalaceNumber = parseFloat(donateBalace);
        const newDonateBalace = donateBalaceNumber + addMoneyNumber;
      
        document.getElementById('donate-balance').innerText = newDonateBalace
      
      }


   
   
   else{
    alert('Failed to Donate Money. ')
   }
    
})