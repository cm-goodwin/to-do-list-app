function newItem() {
  //Adding a new item to the list
  let list = $("#list");
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must enter a new value!");
  } else {
    list.append(li);
  }
}
