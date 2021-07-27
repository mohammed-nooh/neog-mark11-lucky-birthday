"use strict";


const privacyNotice=document.querySelector("#privacy-notice");
const closeBtn=document.querySelector(".close-btn");
const dateElement=document.querySelector("#date");
const luckyElement=document.querySelector(".input-field");
const checkBtn=document.querySelector("#check");
const message=document.querySelector(".message");
const imageElement=document.querySelector("#image-section");


//functions

function checkHandler(){
    let sum=0;
    const date=dateElement.value.replace(/-/g,"");
    console.log(date);
    const luckyNumber=luckyElement.value;
    const array= [...date];
    // console.log(array);
    for(let i of array){
        sum+=Number(i);
    }
    // console.log(sum);
    if(sum % luckyNumber ==0){
        messageHandler("YAY you are lucky");
        imageElement.src="images/happy.svg";
    }else{
        messageHandler("Sorry you are not very lucky");
        imageElement.src="images/sad.svg";
    }
}

function closeHandler(){
    privacyNotice.classList.add("hidden");
}

function messageHandler(text){
    message.innerText=text;
}

//operations

closeBtn.addEventListener("click",closeHandler);

checkBtn.addEventListener("click",checkHandler);