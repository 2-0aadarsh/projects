var btn  = document.querySelector("button");
var statuss = document.querySelector("h5");

var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        btn.innerHTML = "Added"
        btn.style.backgroundColor = "rgb(9, 107, 111)";
        statuss.innerHTML = "Friends now"
        statuss.style.color = "Green";
        flag = 1;
    }

    else{
        btn.innerHTML = "Accept"
        btn.style.backgroundColor = "cadetblue";
        statuss.innerHTML = "Stranger"
        statuss.style.color = "Red";
        flag = 0;
    }

})