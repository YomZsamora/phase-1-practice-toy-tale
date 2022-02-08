let addToy = false;

const toysCard = document.createElement("div");
toysCard.className = "card";
document.getElementById("toy-collection").appendChild(toysCard);

document.addEventListener("DOMContentLoaded", () => {
	const addBtn = document.querySelector("#new-toy-btn");
	const toyFormContainer = document.querySelector(".container");
	addBtn.addEventListener("click", () => {
		// hide & seek with the form
		addToy = !addToy;
		if (addToy) {
			toyFormContainer.style.display = "block";
		} else {
			toyFormContainer.style.display = "none";
		}
	});
});

let fetchToys = () => {}

// Fetches the images using the url provided.
let fetchImages = () => {
	fetch('http://localhost:3000/toys')
	.then(resp => resp.json())
   .then(toys => {
      const imageURL = toys["image"]
      const imageURLsArray = createImgElement(imageURL)
      renderImgs(imageURLsArray)
   })
}

// Creates img tag/element and adds the image URL to the src
let createImgElement = imageURL => {
   return imageURL.map( image => {
      return `<img src="${image}">`
   })
}

let renderImgs = imageURLsArray => {
   imageURLsArray.forEach(url => {
      toysCard.innerHTML += url
   })
}