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

let colors = ["#F2DCC9","#D9BCA3","#7C9EA6","#3C5E73", "#283040"];

//loop through arrays and set color for each svg

for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

//select first span with class "bold" and change its text color to 7C9EA6

document.querySelector("#query .bold").style.color = "#7C9EA6";

//replace first list item text with "this is new list item text."

document.querySelector(".content_list li:first-of-type").textContent = "This is new list item text.";

//For the third list item below, add your name to the existing text, but wrap it in some strong tags.

document.querySelectorAll(".content_list li")[2].innerHTML +=" <strong>J Alicea</strong>";

//If you inspect the HTML or view the file, you can see that there is a link below that has the hidden attribute on it. Use JavaScript to remove that attribute so that you can see that element display on the page

document.querySelector("#remove a").removeAttribute("hidden");