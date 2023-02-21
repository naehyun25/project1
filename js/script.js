$(function(){
    document.querySelector("#layer button").addEventListener("click",
function(){
    document.querySelector("#layer").style.display="none";})
    $( "#layer" ).draggable();

});//layer

//layer pop-up 쿠키생성
const popUp = document.querySelector("#layer"),
close = document.querySelector("#layer>button"),
checkbox = document.querySelector("#popup");
let visited = false;

function setCookie(name,value,day){
    let date = new Date();
    date.setDate(date.getDate()+day);

    let setCookie='';
    setCookie += name+'='+value+';';
    setCookie += 'Expires='+date.toUTCString();
    document.cookie = setCookie;
}
 
function delCookie(name){
    let date = new Date();
    date.setDate(date.getDate()-1);

    let setCookie='';
    setCookie+=name+'=popUp01;'
    setCookie+='Expires='+date.toUTCString();
    document.cookie = setCookie;
}

function checkCookie(name){
    let cookies = document.cookie.split(';');
    for(let c in cookies){
        if(cookies[c].indexOf(name)>-1){
            visited=true;
        }
    };
    if(visited){
        popUp.style.display='none';
    }else{
        popUp.style.display='block';}
}
checkCookie('project1');
close.addEventListener("click",function(){
    if(checkbox.checked){
        setCookie("project1","popup01",1);
        myPop.styel.display='none'
    }else{
        popUp.style.display="block";
        delCookie("project1");
    }
})

