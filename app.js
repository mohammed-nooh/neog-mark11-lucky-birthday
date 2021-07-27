"use strict";


const privacyNotice=document.querySelector("#privacy-notice");
const closeBtn=document.querySelector(".close-btn");
const dateElement=document.querySelector("#date");
const luckyElement=document.querySelector(".input-field");
const checkBtn=document.querySelector("#check");
const message=document.querySelector(".message");
const imageElement=document.querySelector("#image-section");


//functions

function closeHandler(){
    privacyNotice.classList.add("hidden");
}

function messageHandler(text){
    message.innerText=text;
}

//operations

closeBtn.addEventListener("click",closeHandler);

messageHandler("hi iam nooh")