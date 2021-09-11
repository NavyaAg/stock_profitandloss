var initialPrice=document.querySelector("#initial-price")
var currentPrice=document.querySelector("#current-price")
var quantity=document.querySelector("#qt")
var check=document.querySelector(".check")
var message=document.querySelector(".output");

    function calcProfitandLoss(initialPrice,quantity,currentPrice){
    if(initialPrice<currentPrice){        
        var profit=(currentPrice-initialPrice)*quantity;
        var profitPercent=((profit/initialPrice)*100).toFixed(2);
        message.innerText="Profit is ₹ "+profit+" which is "+profitPercent+"%";
       
    }
    else if(initialPrice>currentPrice){
        var loss=(initialPrice-currentPrice)*quantity;
        var lossPercent=((loss/initialPrice)*100).toFixed(2);
        message.innerText="loss is ₹ "+loss+" which is "+lossPercent+"%";
       
    }
    else
    message.innerText=" No loss No Profit ";
  
}

check.addEventListener("click",function submitHandler(){
    var priceBought=initialPrice.value;
    var qt=quantity.value;
    var priceNow=currentPrice.value;
    calcProfitandLoss(priceBought,qt,priceNow)
})