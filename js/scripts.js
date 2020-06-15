// Business Logic for Place

function Place() {
  this.places = [];
  this.currentID = 0;
}

Place.prototype.addPlace = function(place) {
  this.places.push(place);
}

Place.prototype.assignID = function(place) {
this.currentID.ID += 1;
return this.currentID;
}


Place.prototype.findPlace = function(place) {
  for (var i=0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

// Business Logic for Location

function Location(name, country, timeOfYear, daysAt) {
  this.name = name;
  this.country = country;
  this.timeOfYear = timeOfYear;
  this.daysAt = daysAt;
}

Location.prototype.placeDetails = function() {
return this.name + " " + this.country + "" + this.timeOfYear + "" + this.daysAt;
}

let Rome = new Location("Rome", "Italy", "Fall", 14);
let HoodRiver = new Location("Hood River", "United States", "Summer", 104);
let MtEverest = new Location("Mt. Everest", "Nepal", "Summer", 18);

// User Interface Logic 

$(document).ready(function() {
  $("form#input").submit(function() {
    event.preventDefault();
    let name = $("#name").val();
    let country = $("#country").val();
    let timeOfYear = $("#timeOfYear").val();
    let daysAt = $("#daysAt").val();
    let newPlace = new Location(name, country, timeOfYear, daysAt);

    $("#display").show();
    $("#namePlace").text(newPlace.name);
    $("#countryPlace").text(newPlace.country);
    $("#timeOfYearPlace").text(newPlace.timeOfYear);
    $("#daysAtPlace").text(newPlace.daysAt);
  });

  $("#rome").click(function() {
    event.preventDefault();
    $("#previousPlaceDisplay").show();
    showObject(Rome);
  });

  $("#hoodRiver").click(function() {
    event.preventDefault();
    $("#previousPlaceDisplay").show();
    showObject(HoodRiver);
  });

  $("#mtEverest").click(function() {
    event.preventDefault();
    $("#previousPlaceDisplay").show();
    showObject(MtEverest);
  });

  function showObject(object) {
    $("#previousName").text(object.name);
    $("#previousCountry").text("Country: " + object.country);
    $("#previousTimeOfYear").text("Time of year: " + object.timeOfYear);
    $("#previousDaysAt").text("Number of days at Location: " + object.daysAt);
  };

});
