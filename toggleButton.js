let btn = document.getElementById("btn");

let isRed = false;

btn.addEventListener("click", function() {
    if(isRed === false){
        document.body.style.backgroundColor = "red";
    }else{
        document.body.style.backgroundColor = "blue";
    }
    isRed = !isRed;
});
