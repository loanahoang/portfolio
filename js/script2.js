let scrollbtn1 = document.getElementById("scroll-id-asg1")
let scrollbtn2 = document.getElementById("scroll-id-asg2")
let scrollbtn3 = document.getElementById("scroll-id-asg3")
let scrollbtn4 = document.getElementById("scroll-id-asg4")
let scrollup = document.getElementById("scroll-id-up")
let asg1 = document.getElementById("asg1")
let asg2 = document.getElementById("asg2")
let asg3 = document.getElementById("asg3")
let asg4 = document.getElementById("asg4")
let top_section = document.getElementById("intro")

scrollbtn1.onclick = () =>{


    asg1.scrollIntoView({behavior: 'smooth'})
}

scrollbtn2.onclick = () =>{

    asg2.scrollIntoView({behavior: 'smooth'})
}

scrollbtn3.onclick = () =>{
 
    asg3.scrollIntoView({behavior: 'smooth'})
}

scrollbtn4.onclick = () =>{


    asg4.scrollIntoView({behavior: 'smooth'})
}

scrollup.onclick = () => {
    top_section.scrollIntoView({behavior: 'smooth'})
}