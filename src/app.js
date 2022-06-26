function login() {
   let users = [
      {
        id:1,
        username:"Balaji",
        password:"tyu",
        email:"hello@hotmail.com"
      },
   
      {
        id:1,
        username:"John",
        password:"test",
        email:"hellojohn@hotmail.com"
      }
    ]
   
    let username = document.getElementById("username");
    let password = document.getElementById("password");
   
   
    let loggedInUser={}
    for (let index = 0; index < users.length; index++) {
      if(Object.values(users[index])[0]==username && Object.values(users[index])[1]==password){
                // redirect to login
                loggedInUser= users[index]
      }
   
    }
   
    console.log(loggedInUser)
}

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
document.querySelector('#login').addEventListener('click', function() {
   let showLogin = document.querySelector('.login-container');

   if (showLogin.style.display == 'none') {
      console.log('hello')
      showLogin.style.display="block";
   } else {
      showLogin.style.display="none";
   }
})


   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.text())
     .then((data) => {
      var object= JSON.parse(data);

      // document.getElementById("users").innerHTML = object
      
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

         const deleteBtn = document.createElement("button")
         deleteBtn.innerHTML = 'delete'
         deleteBtn.classList.add("delete")
         deleteBtn.setAttribute("id","delete_post")

         blog.appendChild(deleteBtn)

         deleteBtn.addEventListener("click",function(){
            deletePost()

         })


         const blogid = document.createElement('h4')
         blogid.classList.add("hidden")
         blogid.innerHTML=object[index].id
         blogid.style.visibility = "hidden"

         blog.appendChild(blogid)

      }
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

    function deletePost() {
      const id = document.querySelector(".hidden").innerHTML;
     
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "id": id
      });
  
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch("https://jsonplaceholder.typicode.com/posts/" + id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    }

function test(){
   alert("it works")
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 1,
  "title": "foo",
  "body": "bar",
  "userId": 1
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function showUpdate() {
   let updateBtn = document.querySelector("#update");

  if (updateBtn.style.display == 'none') {
   console.log('hello')
   updateBtn.style.display="block";
} else {
   updateBtn.style.display="none";
}
}


document.querySelector("#update").addEventListener("submit", (e) => {
   e.preventDefault();

   const id = document.getElementById("id_area").value
   const userID = document.getElementById("userID_area").value
   const updateTitle = document.getElementById("title_area").value
   const updateBody = document.getElementById("body_area")

   var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id,
  "title": userID,
  "body": updateTitle,
  "userId": updateBody
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})

















