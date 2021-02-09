let timer = 0;
let count = 0;

setInterval(function() {
    //let time = parseInt(document.querySelector("h1#counter").innerText);
    document.querySelector("h1#counter").innerHTML = timer++;
    count = 0;
}, 1000);

document.getElementById("plus").addEventListener("click", function(event) {
    let inc = parseInt(document.querySelector("h1#counter").innerText);
    document.querySelector("h1#counter").innerHTML = inc + 1;
});

document.getElementById("minus").addEventListener("click", function(event) {
    let inc = parseInt(document.querySelector("h1#counter").innerText);
    document.querySelector("h1#counter").innerHTML = inc - 1;
});

// document.getElementById("heart").addEventListener("click", function(event) {
//     let heartLike = parseInt(document.querySelector("h1#counter").innerText);
//     document.querySelector("ul.likes").innerHTML = heartLike + ": ";
// });

document.getElementById("heart").addEventListener("click", function(){
    count++;
    var li = document.createElement("li");
    var node = document.createTextNode(timer + " has been liked " + count + " time(s).")
    var likes = document.querySelector('.likes')
    var lastLike = document.querySelector('.likes').lastChild
    li.appendChild(node);
    if(count > timer){
     lastLike.replaceWith(li)
    } 
    else {
      likes.appendChild(li);
    }
  });