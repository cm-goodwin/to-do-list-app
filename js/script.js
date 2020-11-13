//add a class
let inputs = $("input");
inputs.addClass("my-class");
//Create List/variable using jquery
let list = $("#list");
//add storing the <li></li> into a variable
let li = $("<li></li>");
//getting the value of an input from the html
//$("#input").val();
//store the value into a variable we can use
let inputValue = $("#input").val();
//one way to add items to list
list.append("<li>Apple</li>");
list.append("<li>Pineapple</li>");
list.append("<li>Strawberry</li>");
//other way to add items to list
list.append(li);
li.append("potatoes");

li.append(inputValue);
list.append(li);
console.log(list);
