let item1 = document.querySelector("item-1");
let divImg = document.createElement("div");
let img = document.createElement("img");
img.src = mtn.jpeg;
img.setAttribute("alt","Mountain");
img.style.borderRadius = "90%";
img.style.margin = "10%";
item1.append(divImg);
divImg.append(img);


