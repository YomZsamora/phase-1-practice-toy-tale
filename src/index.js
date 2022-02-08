let addToy = false;

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