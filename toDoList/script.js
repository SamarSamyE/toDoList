// Create a new element list
function newElement() {
  var li = document.createElement("li");
  var text = document.getElementById("input").value;
  li.innerHTML=text;
  document.body.append(li);
  if (text === '') {
    alert("You have to write anything to can add!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  // close button 
  document.getElementById("input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
    }
  }
 
}
// checked item
var list = document.getElementById('myList');
list.addEventListener('click', function(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
})

