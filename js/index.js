//common function


function getInputFieldById(id){
    const inputValue =document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

}

function showSection(id){

    document.getElementById('donate-form').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
   

}


//btn function

document.getElementById('history-btn')
.addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-primary')
    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.add('border')
  
    showSection('history');
    
})

document.getElementById('donation-btn')
.addEventListener('click', function(){
    document.getElementById('donation-btn').classList.add('bg-primary')
    document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('history-btn').classList.add('border')
   
    showSection('donate-form');
    
})

window.addEventListener('scroll',function(){
    const header = document.querySelector('header')
    header.classList.toggle("sticky",window.scrollY > 0)
    header.classList.add('backdrop-blur','backdrop-filter')
 
   
})





// main function
document.getElementById('donate-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const historyTittle = document.getElementById('history-tittle').innerText

    const addMoney = document.getElementById('donate-money').value;
    const addMoneyNumber = parseFloat(addMoney);


    if (!isNaN(addMoney) && !isNaN(parseFloat(addMoney)) && parseFloat(addMoney) > 0) {
        const donateMoney = getTextFieldById('donate-balance');
        const outMoney = getTextFieldById('out-money');
        if(addMoneyNumber> outMoney){
            alert('you Do not have enough money for donate');
             document.getElementById('donate-money').value = ''
            return;
        }
        const newDonateBalace = addMoneyNumber + donateMoney;
        const myBalace = outMoney -addMoney;
        document.getElementById('donate-balance').innerText = newDonateBalace
        document.getElementById('out-money').innerText=myBalace
        document.getElementById('donate-money').value = ''
        const now = new Date();

        const div = document.createElement('div')
        div.classList.add("border", "mb-6", "border-slate-300" , "rounded-md" , "py-4", "px-2")
        div.innerHTML = `
                 <h3 class="font-bold lg:text-2xl"> ${addMoney} Taka is ${historyTittle} </h3>
                 <p class="text-gray-400">${now} </p>
            `
        document.getElementById('history').appendChild(div)
        document.getElementById('my_modal_1').showModal()
      }
   else{
    alert('Failed to Donate Money. ')
   }
    
})




document.getElementById('donate-btn-1')
.addEventListener('click', function(event){
    event.preventDefault();

    const historyTittle1 = document.getElementById('history-tittle-1').innerText

    const addMoney1 = document.getElementById('donate-money-1').value;
    const addMoneyNumber1 = parseFloat(addMoney1);


    if (!isNaN(addMoney1) && !isNaN(parseFloat(addMoney1)) && parseFloat(addMoney1) > 0) {
        const donateMoney1 = getTextFieldById('donate-balance-1');
        const outMoney = getTextFieldById('out-money');
        if(addMoneyNumber1> outMoney){
            alert('you Do not have enough money for donate');
             document.getElementById('donate-money-1').value = ''
            return;
        }
        const newDonateBalace1 = addMoneyNumber1 + donateMoney1;
        const myBalace1 = outMoney -addMoney1;
        document.getElementById('donate-balance-1').innerText = newDonateBalace1
        document.getElementById('out-money').innerText=myBalace1
        document.getElementById('donate-money-1').value = ''
        const now1 = new Date();

        const div = document.createElement('div')
        div.classList.add("border", "mb-6", "border-slate-300" , "rounded-md" , "py-4", "px-2")
        div.innerHTML = `
                 <h3 class="font-bold text-2xl"> ${addMoney1} Taka is ${historyTittle1} </h3>
                 <p class="text-gray-400">${now1} </p>
            `
        document.getElementById('history').appendChild(div)
        document.getElementById('my_modal_2').showModal()
      }
   else{
    alert('Failed to Donate Money. ')
   }
    
})



document.getElementById('donate-btn-2')
.addEventListener('click', function(event){
    event.preventDefault();

    const historyTittle2 = document.getElementById('history-tittle-2').innerText

    const addMoney2 = document.getElementById('donate-money-2').value;
    const addMoneyNumber2 = parseFloat(addMoney2);


    if (!isNaN(addMoney2) && !isNaN(parseFloat(addMoney2)) && parseFloat(addMoney2) > 0) {
        const donateMoney2 = getTextFieldById('donate-balance-2');
        const outMoney = getTextFieldById('out-money');
        if(addMoneyNumber2> outMoney){
            alert('you Do not have enough money for donate');
             document.getElementById('donate-money-2').value = ''
            return;
        }
        const newDonateBalace2 = addMoneyNumber2 + donateMoney2;
        const myBalace2 = outMoney -addMoney2;
        document.getElementById('donate-balance-2').innerText = newDonateBalace2
        document.getElementById('out-money').innerText=myBalace2
        document.getElementById('donate-money-2').value = ''
        const now2 = new Date();

        const div = document.createElement('div')
        div.classList.add("border", "mb-6", "border-slate-300" , "rounded-md" , "py-4", "px-2")
        div.innerHTML = `
                 <h3 class="font-bold text-2xl"> ${addMoney2} Taka is ${historyTittle2} </h3>
                 <p class="text-gray-400">${now2} </p>
            `
        document.getElementById('history').appendChild(div)
        document.getElementById('my_modal_3').showModal()
      }
   else{
    alert('Failed to Donate Money. ')
   }
    
})