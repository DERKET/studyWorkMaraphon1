document.querySelectorAll('.slide').forEach( slide  => {
   slide.onmouseover = event => {
      document
         .querySelectorAll('.slide')
         .forEach( slide => slide.classList.remove('active'))
      slide.classList.add('active')
      document.body.style.backgroundImage = document.querySelector('.slide.active').style.backgroundImage
   }
})
