let tgo=document.getElementsByClassName("toggle");
console.log(tgo);


let tg=Array.from(tgo);

console.log(tg);
 

tg.map(item=>item.firstElementChild.addEventListener("click",e=>{
    e.target.nextElementSibling.classList.toggle("hide");
    console.log(e.target.nextElementSibling);  
}))


// tg.firstElementChild.addEventListener("click",e=>{
//     // e.target.nextElementSibling.style.visibility="visible";
//     e.target.nextElementSibling.classList.toggle("hide");
//    console.log(e.target.nextElementSibling);
// });


let body=document.querySelector("body");

let aside=document.createElement("aside");
aside.classList.add("aside");
body.insertBefore(aside,body.children[0]);
console.log(body);

let up=document.createElement("div");
up.classList.add("up");
body.insertBefore(up,aside);

console.log(body);

let btn=document.createElement("button");
btn.classList.add("button");
btn.innerText="click"
body.insertBefore(btn,body.children[0]);

let video=document.getElementById("video");

btn.addEventListener("click",e=>{
    aside.classList.toggle("cover");
    up.classList.toggle("down");
    
})
let song=document.getElementById("song");
song.addEventListener("click",e=>{
    e.target.innerText="song";
    e.target.style.backgroundColor="yellow";
    e.target.style.color="red";
    video.classList.toggle("showVideo");
})