var randnum1 = Math.floor(Math.random()*6)+1;

var randimg = "Dice"+randnum1+".png";

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src",randimg);

var randnum2 = Math.floor(Math.random()*6)+1;

var randimg2 = "Dice"+randnum2+".png";

var img1= document.querySelectorAll("img")[1];

img1.setAttribute("src",randimg2);

if(randnum1>randnum2)
{
    document.querySelector("h1").innerHTML="🎆🎇🥇 Player 1 Won ❗❗"
}

if(randnum1<randnum2)
{
    document.querySelector("h1").innerHTML="🎆🎇🥇 Player 2 Won ❗❗"
    
}

if(randnum1==randnum2)
{
    document.querySelector("h1").innerHTML="OOPS Draw !!"
    
}



