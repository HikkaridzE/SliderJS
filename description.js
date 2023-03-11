const entities = [
    {
      text: 'Rostov-on-Don\nLCD admiral',
      size: '81m2',
      RepairTime: '3.5 months'
    },
    {
      text: 'Sochi\nThieves',
      size: '105m2',
      RepairTime: '4 months'
    },
    {
      text: 'Rostov-on-Don\nPatriotic',
      size: '93m2',
      RepairTime: '3 months'
    }
]


  const text = document.querySelector('.City')
  const size = document.querySelector('.Size')
  const RepairTime = document.querySelector('.RepairTime')

  const setEntity = (index) => {
    text.innerText = entities[index].text
    size.innerText = entities[index].size
    RepairTime.innerText = entities[index].RepairTime
}

const prev = document.querySelector('.slider-prev')
const next = document.querySelector('.slider-next')
// const cityDescription = document.querySelector('.cityDesc')
let currentIndex = 0

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })
next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
})
// cityDescription.addEventListener('click', () => {
//     var text = document.querySelector('.cityDesc');
//     text.value += 'after clicking';
// })
