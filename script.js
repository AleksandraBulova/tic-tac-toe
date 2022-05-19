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
    event.target.className !== 'restart settings_text' && event.target.className !== 'change settings_text' && 
    event.target.className !== 'statistics-game settings_text') {
      settings.classList.remove('active')
    }
  })

  const cell = document.querySelectorAll('.playing-field_cell')
  let thisX = true
  let count = 0
  let arrWin = [
    [],
    [],
    []
  ] 

  let arrStatistics = []
  let historyLocalStorage = JSON.parse(localStorage.getItem('win'))

  if(historyLocalStorage !== null) {
    for(let i = 0; i < historyLocalStorage.length; i++){
      arrStatistics.push(historyLocalStorage[i])
      if (historyLocalStorage[i] === 'X'){
        document.getElementById(`item-${[i]}`).innerHTML = 'Player win : X '
      } 
      if (historyLocalStorage[i] === '0') {
        document.getElementById(`item-${[i]}`).innerHTML = 'Player win : 0 '
      }
      if (historyLocalStorage[i] === 'Draw') {
        document.getElementById(`item-${[i]}`).innerHTML = 'Draw game'
      }
    }
  }

  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function(event) {
      const cellElement = event.composedPath().find(el => el.className === 'playing-field_cell')
      const cellId = event.target.id
      const fillArr = () => {
        if(cellId === '1' || cellId === '2'|| cellId === '3'){
          arrWin[0][cellId - 1] = cellElement.innerHTML
        }
        if(cellId === '4' || cellId === '5'|| cellId === '6'){
          arrWin[1][cellId - 4] = cellElement.innerHTML
        }
        if(cellId === '7' || cellId === '8'|| cellId === '9'){
          arrWin[2][cellId - 7] = cellElement.innerHTML
        }
      }

      const playerWin = document.querySelector('.player-win')
      const numberMoves = document.querySelector('.number-moves')

      const textWindowWin = () => {
        thisX === true ? playerWin.innerHTML = `Player '${'0'}' win!` : playerWin.innerHTML = `Player '${'X'}' win!`
        numberMoves.innerHTML = `Number of moves: ${count}`
      }

      const historyStatistics = () => {
        if(arrStatistics.length < 10){
          thisX === true ? arrStatistics.push('0') : arrStatistics.push('X')
        } else {
          arrStatistics.shift()
          thisX === true ? arrStatistics.push('0') : arrStatistics.push('X')
        }
        localStorage.setItem('win', JSON.stringify(arrStatistics))
      }

      const fillStatistics = () => {
        for(let k = 0; k < arrStatistics.length; k++) {
          if (arrStatistics[k] === 'X'){
            document.getElementById(`item-${[k]}`).innerHTML = 'Player win : X '
          } 
          if (arrStatistics[k] === '0') {
            document.getElementById(`item-${[k]}`).innerHTML = 'Player win : 0 '
          }
          if (arrStatistics[k] === 'Draw') {
            document.getElementById(`item-${[k]}`).innerHTML = 'Draw game'
          }
        }
      }

      const win = document.querySelector('.window-win')

      const victoryCheck = () => {
        if(arrWin[0][0] === arrWin[0][1] && arrWin[0][1] === arrWin[0][2] && arrWin[0][0] && arrWin[0][1] && arrWin[0][2] ) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[1][0] === arrWin[1][1] && arrWin[1][1] === arrWin[1][2] && arrWin[1][0] && arrWin[1][1] && arrWin[1][2]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[2][0] === arrWin[2][1] && arrWin[2][1] === arrWin[2][2] && arrWin[2][0] && arrWin[2][1] && arrWin[2][2]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][0] === arrWin[1][0] && arrWin[1][0] === arrWin[2][0] && arrWin[0][0] && arrWin[1][0] && arrWin[2][0] ) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][1] === arrWin[1][1] && arrWin[1][1] === arrWin[2][1] && arrWin[0][1] && arrWin[1][1] && arrWin[2][1]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][2] === arrWin[1][2] && arrWin[1][2] === arrWin[2][2] && arrWin[0][2] && arrWin[1][2] && arrWin[2][2]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][0] === arrWin[1][1] && arrWin[1][1] === arrWin[2][2] && arrWin[0][0] && arrWin[1][1] && arrWin[2][2]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][2] === arrWin[1][1] && arrWin[1][1]  === arrWin[2][0] && arrWin[0][2] && arrWin[1][1] && arrWin[2][0]) {
          textWindowWin()
          historyStatistics()
          fillStatistics()
          return win.classList.toggle('active')
        }
        if(arrWin[0][0] && arrWin[0][1] && arrWin[0][2] && arrWin[1][0] && arrWin[1][1] && arrWin[1][2] && 
          arrWin[2][0] && arrWin[2][1] && arrWin[2][2]) {
          playerWin.innerHTML = `Draw!` 
          numberMoves.innerHTML = `Number of moves: ${count}`
          if(arrStatistics.length < 10){
            thisX === true ? arrStatistics.push('Draw') : arrStatistics.push('Draw')
          } else {
            arrStatistics.shift()
            thisX === true ? arrStatistics.push('Draw') : arrStatistics.push('Draw')
          }
          localStorage.setItem('win', JSON.stringify(arrStatistics))
          fillStatistics()
          return win.classList.toggle('active')
        }
      }

      if(cellElement.innerHTML === '' && thisX === true) {
        count++
        cellElement.innerHTML = 'X'
        thisX = !thisX
        fillArr()
        victoryCheck()
      } else if(cellElement.innerHTML === '') {
        count++
        cellElement.innerHTML = 'O'
        thisX = !thisX
        fillArr()
        victoryCheck()
      }

      console.log(arrStatistics, localStorage.getItem('win'))

      const newGame = () =>{
        thisX = true
        count = 0
        arrWin = [
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

  const statisticsButton = document.querySelector('.statistics-game')
  const statisticsGame = document.querySelector('.statistics')
  const statisticsClose = document.querySelector('.statistics__close')

  statisticsButton.addEventListener('click', function() {
    statisticsGame.classList.toggle('active')
  })

  statisticsClose.addEventListener('click', function() {
    statisticsGame.classList.remove('active')
  })
  
})