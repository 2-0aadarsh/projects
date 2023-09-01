var container = document.querySelector(".container");
var likeOverPic = document.querySelector("#over-pic");
var likeBelowPic = document.querySelector("#below-pic");

var flag = 0;

container.addEventListener("dblclick", function(){
    likeOverPic.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(function(){
        likeOverPic.style.transform = "translate(-50%, -50%) scale(0)";
    }, 800)

    likeBelowPic.style.color = "Red";
    flag = 1;
})



likeBelowPic.addEventListener("click", function(){
    if(flag == 0) {
        likeOverPic.style.transform = "translate(-50%, -50%) scale(1)";
        setTimeout(function(){
            likeOverPic.style.transform = "translate(-50%, -50%) scale(0)";
        }, 800)

        likeBelowPic.style.color = "Red";

        flag = 1;
    }

    else{
        likeBelowPic.style.color = "white";
        flag = 0;
    }
})
