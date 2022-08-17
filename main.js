// nav actib area

const actibe = document.getElementById("hrd");

const btns = actibe.getElementsByClassName("actv");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var count = document.getElementsByClassName("active")
        count[0].className = count[0].className.replace("active", "");
        this.className += "active";
    });
}

// navbar area
const navicanion = document.querySelector(".navicanion-res");
const naveIcon = document.querySelector("#icom-nav");


// console.log(waith);

naveIcon.addEventListener("click", function() {
    navicanion.classList.toggle("activesNav");
    navicanion.style.display = "block";
});