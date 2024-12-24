// const panels = document.querySelectorAll('.panel')

// console.log(panels)
// panels.forEach(chisom => {
//    chisom.addEventListener('click', addActiveClass(chisom))
// })

// function addActiveClass(panel) {
//    console.log(panel)
//    removeActiveClasses()
//    panel.classList.add('active')
// }

// function removeActiveClasses() {
//    panels.forEach(panel => {
//       panel.classList.remove('active')
//    })
// }

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
   panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
   })
})

function removeActiveClasses() {
   panels.forEach(panel => {
      panel.classList.remove('active')
   })
}