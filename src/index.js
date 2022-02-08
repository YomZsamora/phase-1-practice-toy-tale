let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");


document.addEventListener("DOMContentLoaded", () => {
   addBtn.addEventListener("click", toggleForm);
   fetchToys();
});

// hide & seek with the form
let toggleForm = () => {
   addToy = !addToy;
   if (addToy) {
      toyFormContainer.style.display = "block";
   } else {
      toyFormContainer.style.display = "none";
   }
}

// Fetches the toys details / info using the url provided.
let fetchToys = () => {
   fetch('http://localhost:3000/toys')
   .then(resp => resp.json())
   .then(toys => {
      renderToyDetails(toys)
   })
}

// Renders toy details for each retrieved toy from the response
let renderToyDetails = toys => {
   toys.forEach(toy => {
      const toysCard = document.createElement("div");
      toysCard.className = "card";
      document.getElementById("toy-collection").appendChild(toysCard);
      toysCard.innerHTML += `<h2>${toy.name}</h2>`
      toysCard.innerHTML += `<img src="${toy.image}" class="toy-avatar">`
      toysCard.innerHTML += `<p>${toy.likes} Likes </p>`
      toysCard.innerHTML += `<button class="like-btn" id="${toy.id}">Like </button>`
   })
}


