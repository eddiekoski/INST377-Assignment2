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



for (let i = 1; i <= 5; i++) {
  console.log(text);
  newImage = document.createElement("img");

  text = "images/pic" + i + ".jpg";

  newImage.setAttribute("src", text);
  
  thumbBar.appendChild(newImage);
  newImage.onclick=function(e) {
    displayedImage.src=e.target.src;
    }

}

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);



/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent= 'Lighten';
        overlay.style.backgroundColor='rgba(0,0,0,0.5)';

    } else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor= 'rgba(0,0,0,0)';
    
    }
}