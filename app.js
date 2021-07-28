"use strict";


const privacyNotice=document.querySelector("#privacy-notice");
const closeBtn=document.querySelector(".close-btn");
const dateElement=document.querySelector("#date");
const luckyElement=document.querySelector("#lucky-number");
const checkBtn=document.querySelector("#check");
const message=document.querySelector(".message");
const imageElement=document.querySelector("#image");
const form=document.querySelector("#form");


//functions

function checkHandler(e) {
    e.preventDefault();
    // console.log("hi iam nooh and my program is not working");
    let sum=0;
    const date=dateElement.value.replace(/-/g,"");
    // console.log(`date is ${date}`);
    const luckyNumber=luckyElement.value;
    // console.log(`luckyNumber is ${luckyNumber}`);
    const array= [...date];
    // console.log(array);
    for(let i of array){
        sum+=Number(i);
    }
    // console.log(sum);
    if((sum % luckyNumber) ===0){
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


form.addEventListener("submit",checkHandler);