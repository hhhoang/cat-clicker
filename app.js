// Create unordered list element




// list of images and their attributes
let images = [{
    src: "catonapple.jpg", 
    alt: "cat on apple",
    link: "http://3.bp.blogspot.com/_0A0AHYmotyw/TKjIJNzLqAI/AAAAAAAAAA4/LNwxFTXwbWQ/s1600/Cat+on+apple.jpg"
    },
    {src: "catsincup.jpg", 
    alt: "cats in cup",
    link: "http://3.bp.blogspot.com/_0A0AHYmotyw/TKjIJNzLqAI/AAAAAAAAAA4/LNwxFTXwbWQ/s1600/Cat+on+apple.jpg"
    },
    {src: "catsredhat.jpg", 
    alt: "cat with red hat",
    link: "http://2.bp.blogspot.com/_dedcXqzPdxo/TQJlRYIFjeI/AAAAAAAABXY/Sj0fudq_nX4/s1600/hoodie-red-cat.jpg"
    },
    {src: "catwithyellowshirt.jpg", 
    alt: "cat with yellow shirt",
    link: "https://i.pinimg.com/originals/b6/c6/07/b6c607fbfa9dd03453bcaf4f7d69aad9.jpg"
    },
    {src: "sleepingcat.jpg", 
    alt: "sleeping cat",
    link: "https://i.telegraph.co.uk/multimedia/archive/02158/cat-in-bed_2158739k.jpg"
}]

// Block 1
/* let counter1 = 0;

let numberOfClick1 = document.getElementById("clicks1");
let catClicked1 = document.getElementById("catClicked1");

catClicked1.addEventListener("click", function(){
    counter1 += 1;
    numberOfClick1.innerHTML = counter1;
});

// Block 2
let counter2 = 0;

let numberOfClick2 = document.getElementById("clicks2");
let catClicked2 = document.getElementById("catClicked2");

catClicked2.addEventListener("click", function(){
    counter2 += 1;
    numberOfClick2.innerHTML = counter2;
});


document.getElementById("cat1").addEventListener("click", function(){
    document.getElementById("displaycat").innerHTML = "Hello World";
  }); */

for (let i=0;i<5;i++){
    document.getElementById(i.toString()).addEventListener("click", function(){
        removeImage();
        displayImage(i);
    });
}  


let objTo = document.getElementById("displaycat");
// displayImagewhenClicked
function displayImage(id) {
    let img = document.createElement('img');
    img.src = images[id].src;
    img.alt = images[id].alt;
    objTo.appendChild(img);
} 
// remove previous image
function removeImage(){
    let currentImg = document.getElementsByTagName('img');
    for (let p = 0; p < currentImg.length; p++) {
        objTo.removeChild(currentImg[0]);
    }    
}

// list of counter for each Cat
let counterList = [];
for (let i=0;i<5;i++){
    counterList.push("counter" + "_" + i);
}
//updateCounter();
// updateCounter
function updateCounter(){
    let description = '<h2>I am Cat <span id="catNumber">0</span> and I have: <span id="clicks1">0</span> meow-clicks</h2>'
    let credit = 'thanks to: ';
    objTo.innerHTML += description;
    objTo.innerHTML += credit;
}
