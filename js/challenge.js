let timer = 0;
let count = 0;
let paused = false;
let plus = document.querySelector("button#plus");
let minus = document.querySelector("button#minus");
let heart = document.querySelector("button#heart");
let pause = document.querySelector("button#pause");
let submit = document.querySelector("form#comment-form");
let comment = document.querySelector("input[type='text']");
comment.placeholder = "comment";

function countUp(){
    document.querySelector("h1#counter").innerHTML = ++timer;
    count = 0;
};

let counting = setInterval(countUp, 1000);

plus.addEventListener("click", function() {
    let inc = parseInt(document.querySelector("h1#counter").innerText);
    document.querySelector("h1#counter").innerHTML = inc + 1;
});

minus.addEventListener("click", function() {
    let inc = parseInt(document.querySelector("h1#counter").innerText);
    document.querySelector("h1#counter").innerHTML = inc - 1;
});

heart.addEventListener("click", function(){
    count++;
    let counterListItem = document.createElement("li");
    counterListItem.style.listStyleType = "none";
    let counterNode = document.createTextNode(timer + " has been liked " + count + " time(s).");
    let likesList = document.querySelector('.likes');
    counterListItem.appendChild(counterNode);
    likesList.appendChild(counterListItem);
  });

pause.addEventListener("click", function(){
    if(!paused){
        clearInterval(counting);
        paused = true;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        pause.innerText = "resume";
    }
    else {
        counting = setInterval(countUp, 1000);
        paused = false;
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        pause.innerText = "pause";
    }
})

submit.addEventListener("submit", function(event){
    let commentListItem = document.createElement("li");
    commentListItem.style.listStyleType = "none";
    let commentNode = document.createTextNode(comment.value);
    let comments = document.querySelector('.comments');
    commentListItem.appendChild(commentNode);
    comments.appendChild(commentListItem);
    comment.value = "";
    comment.placeholder = "comment";
    event.preventDefault();
})