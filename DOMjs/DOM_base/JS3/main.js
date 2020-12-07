let fm = document.getElementById("fm");
let zip = document.getElementById("zip");

fm.addEventListener("input",function(e){
    if(zip.validity.patternMismatch){
        zip.setCustomValidity("郵便番号の形式が間違っています");
    }else{
        zip.setCustomValidity("");
    }
},false);