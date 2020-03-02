// Block 1
let counter1 = 0;

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
