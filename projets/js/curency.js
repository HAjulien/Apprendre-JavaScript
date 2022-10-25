const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency= document.querySelector(".from select"),
toCurrency= document.querySelector(".to select"),
getButton = document.querySelector("form button"),
exchangeIcon = document.querySelector(".drop-list .icon"),
API_KEY = "dbcd40c64fe9ec8b90e48c74";

for( let i = 0; i < dropList.length; i++){
    for (currencyCode in countryList){
        //console.log(curencyCode);
        let selected;
        if (i == 0 ){
            selected = currencyCode === "EUR" ? "selected" : "";
        }else if (i == 1 ) {
            selected = currencyCode === "USD" ? "selected" : "";
        }
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        dropList[i].insertAdjacentHTML("beforeend",optionTag);
        dropList[i].addEventListener("change", e => {
            loadFlag(e.target);  //calling loadFlag with passing target element as an argument
        });
    }
}

function loadFlag(element){
    for (code in countryList){
        if (code === element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://countryflagsapi.com/png/${countryList[code]}`;
            console.log(code);
        }
    }
}


window.addEventListener("load", () =>{
    getExchangeRate();    
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();    
});


exchangeIcon.addEventListener("click", ()=>{

    // let tempCode = fromCurrency.value;  //temporary currency code of FROM drop list stock inside the variable
    // fromCurrency.value = toCurrency.value;
    // toCurrency.value = tempCode;
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value]
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();

});



function getExchangeRate() {
    const amount = document.querySelector(".amount input"),
    exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    
    if (amountVal === "" || amountVal === "0"){
        amount.value = "1";
        amountVal = 1;
    }

    let url = ` https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;
    fetch(url)
    .then(response => response.json())
    .then( result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        //console.log(exchangeRate);
        let totalEchangeRate = (amountVal * exchangeRate).toFixed(2)
        //console.log(totalEchangeRate);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalEchangeRate} ${toCurrency.value}`
    })
    .catch( () =>{
        exchangeRateTxt.innerText = "Error, please refresh the page"
    });
}
