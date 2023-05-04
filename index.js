console.log("Hello World");
let form = document.getElementById("form");
let body = document.getElementsByTagName("body");
function sellbtn(){
    console.log("You Clicked Into Sell Button");
    if (form.style.display == "none") {
        form.style.display = "block";
        // document.body.style.filter = "blur(10px);"
        // form.style.transition = "all 1.5s ease-in";
    }
    else{
        form.style.display = "none";
        // form.style.transition = "all 1.5s ease-in";
    }
}