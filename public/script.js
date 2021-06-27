function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}



function myFunction() {

  // create element
    var para = document.createElement("P");
    para.setAttribute("id", "datebtn");
    // para.innerHTML = "This is a paragraph.";
    document.getElementById("myDIV").appendChild(para);
 

    // var para2 = document.createElement("h3");
    // para.setAttribute("id", "clicks");
    // document.getElementById("myDIV").appendChild(para2);

    // get click time
    var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  
  // adding 0 for single digits
  
  mm = checkTime(mm);
  ss = checkTime(ss);
  // document.getElementById('datebtn').innerHTML = hh + ":" + mm + ":" + ss;
  para.innerHTML = "You cliked at "+hh + ":" + mm + ":" + ss;
  }

  // get click count
  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };