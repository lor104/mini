// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", "https://raw.githubusercontent.com/lor104/mini/master/assets/json/test.json", true);
// xhttp.send();
//
// console.log(xhttp.responseText)

$(document).ready(function(){

  $.ajax({
    url: "https://raw.githubusercontent.com/lor104/mini/master/assets/json/test.json", // path to file
    dataType: 'json', // type of file (text, json, xml, etc)
    success: function(data) { // callback for successful completion
      $(".container").html(data)
      console.log(data[0].Name);
    },
    error: function() { // callback if there's an error
      alert("error");
    }
  });

});
