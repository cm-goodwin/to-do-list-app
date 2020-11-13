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
  //Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", function (crossOut) {
    li.toggleClass("strike");
  });
  //Adding a delete button "x"
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  // Reorder items
  $("#list").sortable();
}
