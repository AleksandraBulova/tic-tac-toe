const cell = document.querySelectorAll('.playing-field_cell')
let thisX = true
const arr = [
  [],
  [],
  []
]

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function(event) {
    const cellElement = event.path.find(el => el.className === 'playing-field_cell')
    const cellId = event.target.id
    const fillArr = () => {
      if(cellId === '1' || cellId === '2'|| cellId === '3'){
        arr[0][cellId - 1] = cellElement.innerHTML
      }
      if(cellId === '4' || cellId === '5'|| cellId === '6'){
        arr[1][cellId - 4] = cellElement.innerHTML
      }
      if(cellId === '7' || cellId === '8'|| cellId === '9'){
        arr[2][cellId - 7] = cellElement.innerHTML
      }
    }

    const victoryCheck = () => {
      if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] && arr[0][1] && arr[0][2] ) {
        return 'win'
      }
      if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] && arr[1][1] && arr[1][2]) {
        return 'win'
      }
      if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] && arr[2][1] && arr[2][2]) {
        return 'win'
      }
      if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] && arr[1][1] && arr[2][2]) {
        return 'win'
      }
      if(arr[0][2] === arr[1][1] && arr[1][1]  === arr[2][0] && arr[0][2] && arr[1][1] && arr[2][0]) {
        return 'win'
      }
    }

    if(cellElement.innerHTML === '' && thisX === true) {
      cellElement.innerHTML = 'X'
      thisX = !thisX
      fillArr()
      victoryCheck()
    } else if(cellElement.innerHTML === '') {
      cellElement.innerHTML = 'O'
      thisX = !thisX
      fillArr()
      victoryCheck()
    }
  })
}
