// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById('container')
container.innerHTML = "" // clears present shitty, commented out code

function renderImage(img) {
    let imgsDOM = ""
    for ( i = 0; i < img.length; i++ ) {
        imgsDOM += `<img alt="employee in the company" class="team-img" src="${img[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImage(imgs)