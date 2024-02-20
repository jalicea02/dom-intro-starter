//get first paragraph by id and add span

document.getElementById("firstPara").innerHTML += " <span class = 'tan'>This is new tan text</span>";

//change imgs width to 250px 

let images = document.getElementsByTagName("img");

for (let img of images){
    img.width = "250";
}

//Select elements by Class name and update colors 

let ltBlueSpan = document.getElementsByClassName("light-blue");
let dkBlueSpan = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpan){
    span.style.color = "#7C9EA6";
}

for(let span of dkBlueSpan){
    span.style.color = "#3C5E73";
}

//select svgs and change stroke color

let svgs = document.querySelectorAll("#svgs svg");

//array of colors to change stroke to

let colors = [];