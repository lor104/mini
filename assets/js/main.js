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
      var cars = data;

      var keys = Object.keys(cars[0]);
      console.log("cars: " + cars.length)
      console.log("keys: " + keys.length)

      //the loop that will iterate as many times as there are cars
      for (i = 0; i < cars.length; i++) {

        //create divs for each individual ad
        var div = document.createElement("div");
        div.className = "ad"
        console.log(div.className)
        var element = document.getElementById('containerAds');
        element.appendChild(div);

        //the loop that otherwise appends all data to the elements set up with the first loop
        for (n = 0; n < keys.length; n++) {

          //check to see the key/value pairs iterate properly
          // console.log(keys[n] + ": " + cars[i][keys[n]]);

        }
      }
    },
    error: function() { // callback if there's an error
      console.log("error with ajax request");
    }
  });

});
