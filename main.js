var input = document.getElementById("txt"),
  items = document.querySelectorAll("#list li"),
  tab = [],
  index;

for (var i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    index = tab.indexOf(this.innerHTML);
    input.value = this.innerHTML;
  };
}

function add() {
  var listNode = document.getElementById("list"),
    textNode = document.createTextNode(input.value),
    li = document.createElement("LI");

  li.appendChild(textNode);
  listNode.appendChild(li);

  ref();

  li.onclick = function () {
    index = tab.indexOf(li.innerHTML);
    input.value = li.innerHTML;
  };
}

function ref() {
  tab.length = 0;
  items = document.querySelectorAll("#list li");

  for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}

function del() {
  ref();
  if (items.length >= 0) {
    items[index].parentNode.removeChild(items[index]);
  }
  ref();
}
