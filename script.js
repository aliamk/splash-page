
// const body = document
const { body } = document  // more succinct

function changeBackground(number) {
  // Check if bg is already showing
  let previousBackground
  if (body.className) {
    previousBackground = body.className
  }
  body.className = '' // reset the toggles
  switch (number) {
    case '1':
      return (previousBackground === 'background-1' ? false : body.classList.add('background-1'))
        
    case '2':
      return (previousBackground === 'background-2' ? false : body.classList.add('background-2'))
        
    case '3':
      return (previousBackground === 'background-3' ? false : body.classList.add('background-3'))
        
    default:
      break
  }
}

/* REPLACED WITH ABOVE IN ORDER FOR BUTTONS TO RETURN THE BG BACK TO THE PREVIOUS BG
function changeBackground(number) {
  // console.log(number) click on button, get 1, 2, 3 back
  body.className = '' // reset the toggles
  switch (number) {
    case '1':
      body.classList.add('background-1')
      break
    case '2':
      body.classList.add('background-2')
      break
    case '3':
      body.classList.add('background-3')
      break
    default:
      break
  }
} 
*/