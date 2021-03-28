/*
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

const input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
  if (event.code === 'Enter') {
    const element = massage('Victor', 'img/dialog1__avatar2.png', input.value, '9:50 AM');
    chat.append(element)
   input.value='';
  }
});
*/

const chat = document.querySelector('#masage-content')



function make(tag, mus, object = {}) {
    const element = document.createElement(tag)
    element.classList.add(...mus)
    for (let key in object) {
        element[key] = object[key]
    }
    return element;

}


function massage( text,time=getСurrentTime()) {
    const element = make('div', ['message__holder'])
    const masageTime = make('p', ['chat__masage-time2'])
    masageTime.textContent = time
    const greyMasage = make('div', ['chat__masage-grey'])
    greyMasage.textContent = text
    element.append(masageTime)
    element.append(greyMasage)
    return element
}

const input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
  if (event.code === 'Enter') {
    const element = massage( input.value, getСurrentTime());
    chat.append(element)
   input.value='';
  }
});

function getСurrentTime(){
  const now = new Date();
  const hours=now.getHours();
  const minute = now.getMinutes();
  if (hours>12) {
    return `${hours-12}:${minute} PM`
  } else {
    return `${hours}:${minute} AM`
  }
}
/*
alert(typeof new Date())
const obj={
  run: function (){
    alert(123)
  }
}
obj.run()
*/