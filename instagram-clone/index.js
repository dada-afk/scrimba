const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el");

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        mainEl.innerHTML += `
            <section>
                <div class="post-top">
                    <img class="avatar post-avatar" src="${posts[i].avatar}">
                    <div class="container">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}">
                <div class="post-bottom">
                    <div class="icons">
                        <img class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                    <p class="like">${posts[i].likes} likes</p>
                    <p class="username">${posts[i].username}</p>
                    <p class="comment">${posts[i].comment}</p>
                </div>
                <div class="divider"></div>
            </section>`
    }
    
}

renderPosts();