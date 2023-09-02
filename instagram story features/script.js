var arr = [
    {
        dp : "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

        story : "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

    {
        dp : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

        story : "https://images.unsplash.com/photo-1512618831669-521d4b375f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyZSUyMGRhcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        
    },

    {
        dp : "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

        story : "https://images.unsplash.com/photo-1668661434954-371f1526dee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYXN0aGV0aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },

    {
        dp : "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

        story : "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
]

var storiyan = document.querySelector(".storiyan");
var story = document.querySelector(".story");
var clutter = "";

arr.forEach(function(elem, indexes){
    clutter += `<div class="story">
                    <img id= "${indexes}" src="${elem.dp}" alt="">
                </div>`;
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(details){
    document.querySelector(".story-screen").style.display = "block";

    var goldenValue = arr[details.target.id].story;

    document.querySelector(".story-screen").style.backgroundImage = `url(${goldenValue})`;

    setTimeout(function(){
        document.querySelector(".story-screen").style.display = "none";
    }, 3500)
})