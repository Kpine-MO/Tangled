
function showMenu() {
 let show = document.querySelector('.magic');

 if (show.style.display == 'none') {
    console.log('hello')
    show.style.display="block";
 } else {
    show.style.display="none";
 }

}
function addPost() {
  let btn = document.querySelector(".addpost");

  if (btn.style.display == 'none') {
   console.log('hello')
   btn.style.display="block";
} else {
   btn.style.display="none";
}
   
}

document.querySelector('#sign-up').addEventListener('click', function() {
   let show = document.querySelector('.sign-up-container');

   if (show.style.display == 'none') {
      console.log('hello')
      show.style.display="block";
   } else {
      show.style.display="none";
   }
})

document.querySelector("#profile-btn").addEventListener("click",function(e) {
   e.preventDefault();
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.text())
     .then((data) => {
      var object= JSON.parse(data);
      
      for (let index = 0; index < object.length; index++) {
         const blog =document.getElementById('users');
         const heading = document.createElement('h2')
         heading.innerHTML=object[index].title
         heading.classList.add("color")
         const btn = document.createElement("button")
         btn.innerHTML = 'Read '

         blog.appendChild(btn)


         blog.appendChild(heading)

         const body = document.createElement('p')
         body.innerHTML=object[index].body

         blog.appendChild(body)
      }
     })
})

const postForm = document.querySelector("#add_post")

postForm.addEventListener("submit",function(e) {
     e.preventDefault()
     fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
})
























