
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

         blog.appendChild(heading)

         const body = document.createElement('p')
         body.innerHTML=object[index].body
         body.classList.add("description")

         blog.appendChild(body)

         const btn = document.createElement("button")
         btn.innerHTML = 'Read more'
         btn.classList.add("read")

         blog.appendChild(btn)

      }
     })
})

const postForm = document.querySelector("#add_post")

postForm.addEventListener("submit",function(e) {
     e.preventDefault()

     const title= document.getElementById('post_title').value;
     const body= document.getElementById('post_body').value;
     const userId=1
     var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
     var raw = JSON.stringify({
      "title": title,
      "body": body,
      "userId": 1,
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

     })
























