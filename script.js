const postInfo = document.querySelector('.post-info');

function addTitle(reddit) {
    const redditEl = document.createElement('div');
    const redditTitle = document.createElement('h3');
    redditTitle.innerText = reddit.title;

    redditEl.appendChild(redditTitle);
}

function addImage(redimage) {
    const redditImage = document.createElement('img');
    const redditUrl = document.createElement('p');


    fetch(reddit.title).then((response) => {
        return response.json();
    }).then((data) => {
        console.log data;
    }
}    
 

 


fetch("https://www.reddit.com/r/aww/.json").then((response) => { return response.json();
}) .then((data) => {
 console.log(data);

 const reddit = data.data.children.title;
 reddit.forEach((reddit) => {
    addTitle(reddit);

    const redditImage = data.data.children.thumbnail;
    reddit.forEach((reddit) => {
       addTitle(reddit);    
})
})
})
