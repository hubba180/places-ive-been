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

// User Interface Logic 

$(document).ready(function() {
$("form#new-place").submit(function() {
  event.preventDefault();
  let inputName = $("input#new-name").val();


})


})
