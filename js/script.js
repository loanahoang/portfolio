let scrollbtn = document.getElementById("scroll-id")

let collage = document.getElementById("collage")

scrollbtn.onclick = () => {
    collage.scrollIntoView({behavior:'smooth'});
}

