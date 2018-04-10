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
        div.id = "ad" + i;
        // console.log(div.className)
        var container = document.getElementById("containerAds");
        container.appendChild(div);

        var h3 = document.createElement("h3");
        h3.className = `cars${i} `;
        h3.className += "Name";
        var divContainer = document.getElementById(`ad${i}`)
        divContainer.appendChild(h3);

        var pPrice = document.createElement("p");
        pPrice.className = `cars${i} `;
        pPrice.className += "Price";
        divContainer.appendChild(pPrice);

        var imgPhoto = document.createElement("img");
        imgPhoto.className = `cars${i} `;
        imgPhoto.className += "Photo";
        divContainer.appendChild(imgPhoto);

        var pRetailer = document.createElement("p");
        pRetailer.className = `cars${i} `;
        pRetailer.className += "Retailer";
        divContainer.appendChild(pRetailer);

        var pKilometres = document.createElement("p");
        pKilometres.className = `cars${i} `;
        pKilometres.className += "Kilometres";
        divContainer.appendChild(pKilometres);

        var pTransmission = document.createElement("p");
        pTransmission.className = `cars${i} `;
        pTransmission.className += "Transmission";
        divContainer.appendChild(pTransmission);

        var pExterior = document.createElement("p");
        pExterior.className = `cars${i} `;
        pExterior.className += "Exterior";
        divContainer.appendChild(pExterior);

        var pInterior = document.createElement("p");
        pInterior.className = `cars${i} `;
        pInterior.className += "Interior";
        divContainer.appendChild(pInterior);

        var pVIN = document.createElement("p");
        pVIN.className = `cars${i} `;
        pVIN.className += "VIN";
        divContainer.appendChild(pVIN);

        var pDriveTrain = document.createElement("p");
        pDriveTrain.className = `cars${i} `;
        pDriveTrain.className += "DriveTrain";
        divContainer.appendChild(pDriveTrain);

        var aDetails = document.createElement("a");
        aDetails.className = `cars${i} `;
        aDetails.className += "details";
        divContainer.appendChild(aDetails);

        var aTestDrive = document.createElement("a");
        aTestDrive.className = `cars${i} `;
        aTestDrive.className += "testDrive";
        divContainer.appendChild(aTestDrive);


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
