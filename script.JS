
const chat = document.querySelector('#masage-content')



function make(tag, mus, object = {}) {
  const element = document.createElement(tag)
  element.classList.add(...mus)
  for (let key in object) {
    element[key] = object[key]
  }
  return element;

}


function massage(name, avatar, text, time) {
  const element = make('div', ['chat__masage-blue-masege1'])
  const masageAvatars = make('div', ['chat__masage-avatars'])
  const masageAvatar1 = make('img', ['chat__masage-avatar1'], { src: avatar })
  const masageName = make('h5', ['chat__masage-name'])
  masageName.textContent = name
  const masageTime = make('p', ['chat__masage-time'])
  masageTime.textContent = time
  const blueMasage = make('div', ['chat__masage-blue_masage'])
  blueMasage.textContent = text
  masageAvatars.append(masageAvatar1, masageName, masageTime)
  element.append(masageAvatars, blueMasage)
  return element
}
massage('Victor', 'img/dialog1__avatar2.png', 'bbbbbbbbbbbbbbb', '9:50 AM')




const chatMy = document.querySelector('#masage-content')



function makeMy(tag, mus, object = {}) {
  const elementMy = document.createElement(tag)
  elementMy.classList.add(...mus)
  for (let key in object) {
    elementMy[key] = object[key]
  }
  return elementMy;

}


function massageMy(text, time = getСurrentTime()) {
  const elementMy = makeMy('div', ['message__holder'])
  const masageTimeMy = makeMy('p', ['chat__masage-time2'])
  masageTimeMy.textContent = time
  const greyMasageMy = makeMy('div', ['chat__masage-grey'])
  greyMasageMy.textContent = text
  elementMy.append(masageTimeMy)
  elementMy.append(greyMasageMy)
  return elementMy
}
 
const inputMy = document.getElementById("input");
inputMy.addEventListener("keydown", function (event) {
  if (event.code === 'Enter') {
    const elementMy = massageMy(input.value, getСurrentTime());
    chatMy.append(elementMy)
    inputMy.value = '';
    function first(){
    if (elementMy !== null) {
      const res = massage(arrayRandElement(name), arrayRandElement(img), arrayRandElement(phrases), getСurrentTime())
      chat.append(res)
    } else {

    }
  }
    function second(){
    if (elementMy !== null) {
      const res = massage(arrayRandElement(name),arrayRandElement(img) ,arrayRandElement(phrases) ,getСurrentTime())
      chat.append(res)
    } else {

    }
  }
  setTimeout(first,2000)
  setTimeout(second, 5000)
  }
});
const phrases = ['привет!', 'как дела?', 'чем занят?', 'хорошая погода сегодня!', 'какие планы на вечер?',]

const img = ['img/dialog2__avatar1.png', 'img/dialog1__avatar2.png', 'img/dialog2__avatar2.png', 'img/dialog3__avatar1.png', 'img/dialog3__avatar2.png', 'img/dialog4__avatar1.png']

const name = ['victor Roberts','Terry Griffin','Angela Lopez', 'Piter Williams','Olivia Smith','jessica Harris']

function arrayRandElement(phrases) {
  var rand = Math.floor(Math.random() * phrases.length);
  return phrases[rand];
}
function arrayRandElement(img) {
  var rand = Math.floor(Math.random() * img.length);
  return img[rand];
}
function arrayRandElement(name) {
  var rand = Math.floor(Math.random() * name.length);
  return name[rand];
}



function getСurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  if (hours > 12) {
    return `${hours - 12}:${minute} PM`
  } else {
    return `${hours}:${minute} AM`
  }
}






