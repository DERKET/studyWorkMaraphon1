const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('mouseover', (event) => {
        clearActiveClasses()
        slide.classList.add('active')
		  
		  document.body.style.backgroundImage = document.querySelector('.slide.active').style.backgroundImage
    })
}

function clearActiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
      
    })
}
