document.addEventListener("DOMContentLoaded", function(event) {
  const theme = localStorage.getItem('theme')
  if(theme) {
    if(theme === 'light') {
      document.body.classList.add('theme')
    }

    if(theme === 'dark') {
      document.body.classList.remove('theme')
    }
  }

  const buttonSettings = document.querySelector('.button__settings')
  const settings = document.querySelector('.settings')

  buttonSettings.addEventListener('click', function() {
    settings.classList.toggle('active')
  })

  document.addEventListener('click', function(event) {
    if( event.target.className !== 'button__settings' && event.target.className !== 'settings active' &&
    event.target.className !== 'restart settings_text' && event.target.className !== 'change settings_text') {
      settings.classList.remove('active')
    }
  })

  const cell = document.querySelectorAll('.playing-field_cell')
  let thisX = true
  let count = 0;
  let arr = [
    [],
    [],
    []
  ]

  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function(event) {
      count++

      const cellElement = event.composedPath().find(el => el.className === 'playing-field_cell')
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

      const playerWin = document.querySelector('.player-win')
      const numberMoves = document.querySelector('.number-moves')

      const textWindowWin = () => {
        thisX === true ? playerWin.innerHTML = `Player '${'0'}' win!` : playerWin.innerHTML = `Player '${'X'}' win!`
        numberMoves.innerHTML = `Number of moves: ${count}`
      }

      const win = document.querySelector('.window-win')

      const victoryCheck = () => {
        if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] && arr[0][1] && arr[0][2] ) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] && arr[1][1] && arr[1][2]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] && arr[2][1] && arr[2][2]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && arr[0][0] && arr[1][0] && arr[2][0] ) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && arr[0][1] && arr[1][1] && arr[2][1]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && arr[0][2] && arr[1][2] && arr[2][2]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] && arr[1][1] && arr[2][2]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][2] === arr[1][1] && arr[1][1]  === arr[2][0] && arr[0][2] && arr[1][1] && arr[2][0]) {
          textWindowWin()
          return win.classList.toggle('active')
        }
        if(arr[0][0] && arr[0][1] && arr[0][2] && arr[1][0] && arr[1][1] && arr[1][2] && arr[2][0] && arr[2][1] && arr[2][2]) {
          playerWin.innerHTML = `Draw!` 
          numberMoves.innerHTML = `Number of moves: ${count}`
          return win.classList.toggle('active')
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

      const newGame = () =>{
        thisX = true
        count = 0;
        arr = [
          [],
          [],
          []
        ]
        cellElement.innerHTML = ''
      }

      const windowWinButton = document.querySelector('.window-win__button')

      windowWinButton.addEventListener('click', function() {
        newGame()
        win.classList.remove('active')
      })

      const restartGame = document.querySelector('.restart')

      restartGame.addEventListener('click', function() {
        newGame()
      })
    })
  }

  const changeTheme = document.querySelector('.change')

  changeTheme.addEventListener('click', function() {
    document.body.classList.toggle('theme')
    if(document.body.classList.contains('theme')) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
  })
  
});