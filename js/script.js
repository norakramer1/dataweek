
// DRAG AND DROP FUNCTIONALITY BY: WebDev Simplified: https://www.youtube.com/watch?v=jfYWwQrtzzY&t=649s
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')


draggables.forEach(draggable => {

    draggable.addEventListener('click', () => {
      // let audio = document.getElementById("audio");
        // audio.play();

        let audio = draggable.children[0];
        console.log(audio)
        audio.play();
        draggable.classList.toggle('green')
        
    })
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

