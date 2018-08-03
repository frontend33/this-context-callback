'use strict'
var xhr=new XMLHttpRequest();
//  что бы убедиться что запрос закончен вешается событие load и видим статус 200 ОК
// Запрос пишется до send() потому что придти может мгновенно , поэтому в начале пишется обработчплавный переход между цветамиик события
xhr.addEventListener("load", function(evt){
	try{
		console.log(JSON.parse(xhr.responseText))
	} catch(err){
		console.error(err.message)	
	}



  console.log(evt.targret===xhr)
  // Ответ хранится в responseText
  console.log(xhr.responseText)
  // Преобразуем в json объект при помощи JSON.parse 
  // json parse превратит строку с данными в формате JSON в JavaScript-объект/массив/
  
})

xhr.open('GET','https://raw.githubusercontent.com/m0mus/json_demo/master/src/main/resources/jasons.json')
console.log(xhr.readyState)
console.log(xhr)
xhr.send()
console.log(xhr.readyState)

// Исключение как try except в python
try{
	console.log("Hello world"+ noName)
} catch(error){
	console.log("Поймали исключение "+ error.message)
}