fetch("/data/blog-posts.json")

.then(r=>r.json())

.then(data=>{

let container=document.getElementById("blogPosts")

data.posts.slice(0,3).forEach(post=>{

let div=document.createElement("div")

div.innerHTML=`

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="/blog/posts/${post.slug}.html">
Read
</a>

`

container.appendChild(div)

})

})