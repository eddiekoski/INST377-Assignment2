const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

let text = "";
let credits = ["Photo 1 by Meritt Thomas on Unsplash" ,
 "Photo 2 by Tandem X Visuals on Unsplash",
 "Photo 3 by Lucas Ludwig on Unsplash",
 "Photo 4 by Viktor Nikolaienko on Unsplash",
 "Photo 5 by Klara Kulikova on Unsplash"];
console.log(credits);
console.log(credits.length);



for (i = 1; i <= 5; i++) {
  text = "images/pic" + i + ".jpg";
  console.log(text);
  newImage = document.createElement("img");
  newImage.setAttribute("src", text);
  newImage.setAttribute("text", credits[i-1]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function() {
    displayedImage.setAttribute("src", text);
    });

}

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
