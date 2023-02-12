const getForm = document.querySelector('.form')
console.log(getForm)
const btn = document.querySelector('.btn')
console.log(btn)
const input1 = document.querySelector('.input.name')
console.log(input1)
const container = document.querySelector('.container')
const frame = document.querySelector('.frame')
console.log(frame)

const formUp = btn.addEventListener('click', () => {
  if (input1.value === 'test') {
    const getVideo = document.createElement('div')
    frame.style.paddingTop = '50vh'
    frame.className = 'frame'
    getVideo.href = frame
    container.appendChild(getVideo)
    getForm.className = 'form up'
  } else {
    alert(
      'К сожалению, для тебя нет поздравления или не правильно ввели Имя или Фамилию'
    )
  }
})
const getVideo = document.createElement('div')

getVideo.style.paddingTop = '100vh'
container.appendChild(getVideo)
