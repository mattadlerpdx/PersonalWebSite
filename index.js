let body = document.querySelector("body");
let main = document.querySelector("main");

let img1 = document.createElement("img");
img1.src = "moi.png";
img1.style.borderRadius = "60%";

img1.setAttribute("alt", "Matt");
main.append(img1);
main.setAttribute("style", "text-align:center");

let firstLineBold = document.createElement("p");
let toBold = "Grad student at Portland State University.";
firstLineBold.append(toBold);
firstLineBold.style.fontWeight = "bold";
main.append(firstLineBold);

let paragraph = document.createElement("p");
let text = (document.textContent =
  " Activley pursuing an internship. Expected graduation: Spring 2023. Carry on until we shoudl see a line break in the html page.....");
paragraph.style.margin = "auto";
paragraph.style.width = "30%";
paragraph.append(text);
main.append(paragraph);