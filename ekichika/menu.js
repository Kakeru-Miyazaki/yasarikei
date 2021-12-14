onMenuChange();


function onMenuChange() {
  let elems = document.getElementsByName("radio");
  let val = "";

  for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked) {
      val = elems[i].value;
    }
  } // end for i

  console.log(val);

  if (val == "one") {
    document.getElementById("clockAndTime").style.display = "block";
  } else if (val == "meet") {
    document.getElementById("clockAndTime").style.display = "none";
  } else if (val == "meetWithTime") {
    document.getElementById("clockAndTime").style.display = "block";
  }
}