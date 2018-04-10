// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", "https://raw.githubusercontent.com/lor104/mini/master/assets/json/test.json", true);
// xhttp.send();
//
// console.log(xhttp.responseText)

$(document).ready(function(){

  $.ajax({
    url: "https://raw.githubusercontent.com/lor104/mini/master/assets/json/test.json", // path to file
    dataType: 'json',
    success: function(data) { // callback for successful completion
      var cars = data;

      var keys = Object.keys(cars[0]);
      // console.log("cars: " + cars.length) //check to see how many cars
      // console.log("keys: " + keys.length) //check to see how many keys

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

        var pDetails = document.createElement("div")
        pDetails.className = `cars${i} details`;
        divContainer.appendChild(pDetails)

        var pRetailer = document.createElement("p");
        pRetailer.className = `cars${i} `;
        pRetailer.className += "Retailer";
        pDetails.appendChild(pRetailer);

        var pKilometres = document.createElement("p");
        pKilometres.className = `cars${i} `;
        pKilometres.className += "Kilometres";
        pDetails.appendChild(pKilometres);

        var pTransmission = document.createElement("p");
        pTransmission.className = `cars${i} `;
        pTransmission.className += "Transmission";
        pDetails.appendChild(pTransmission);

        var pExterior = document.createElement("p");
        pExterior.className = `cars${i} `;
        pExterior.className += "Exterior";
        pDetails.appendChild(pExterior);

        var pInterior = document.createElement("p");
        pInterior.className = `cars${i} `;
        pInterior.className += "Interior";
        pDetails.appendChild(pInterior);

        var pVIN = document.createElement("p");
        pVIN.className = `cars${i} `;
        pVIN.className += "VIN";
        pDetails.appendChild(pVIN);

        var pDriveTrain = document.createElement("p");
        pDriveTrain.className = `cars${i} `;
        pDriveTrain.className += "DriveTrain";
        pDetails.appendChild(pDriveTrain);

        var aDetails = document.createElement("a");
        aDetails.className = `cars${i} `;
        aDetails.className += "details";
        aDetails.innerHTML = "View Details";
        aDetails.href = "#";
        divContainer.appendChild(aDetails);

        var aTestDrive = document.createElement("a");
        aTestDrive.className = `cars${i} `;
        aTestDrive.className += "testDrive";
        aTestDrive.innerHTML = "Book a Test Drive";
        aTestDrive.href = "#";
        divContainer.appendChild(aTestDrive);


        //the loop that otherwise appends all data to the elements set up with the first loop
        for (n = 0; n < keys.length; n++) {

          if (keys[n] === "Name") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Price") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Photo") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.src += `${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Retailer") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Kilometres") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Transmission") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Exterior") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "Interior") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "VIN") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

          else if (keys[n] === "DriveTrain") {
            var elementClass = `.cars${i}.${keys[n]}`
            var containerName = document.querySelector(elementClass)
            containerName.innerHTML += `<span>${keys[n]}:</span> ${cars[i][keys[n]]}`;
          }

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
