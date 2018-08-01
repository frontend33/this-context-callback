'use strict'
var xhr=new XMLHttpRequest();
//  что бы убедиться что запрос закончен вешается событие load и видим статус 200 ОК
// Запрос пишется до send() потому что придти может мгновенно , поэтому в начале пишется обработчик события
xhr.addEventListener("load", function(){
  console.log(xhr.readyState)
  console.log(xhr.status+ " "+ xhr.statusText)
})

xhr.open('GET','https://raw.githubusercontent.com/m0mus/json_demo/master/src/main/resources/jasons.json')
console.log(xhr.readyState)
console.log(xhr)
xhr.send()
console.log(xhr.readyState)
