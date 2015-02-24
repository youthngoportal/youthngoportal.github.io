/*!
** Example App
** Licensed under the Apache License v2.0
** http://www.apache.org/licenses/LICENSE-2.0
** Built by Jay Kanakiya ( @techiejayk )
**/

"use strict";

var app = angular.module("ngoapp",[]);

app.controller("ExmpCtrl",function  ($scope) {
	//
	$scope.friends = [
    { name: "Pablo",   age: 55 },
    { name: "Linda",   age: 20 },
    { name: "Marta",   age: 37 },
    { name: "Othello", age: 20 },
    { name: "Markus",  age: 32 }
  ];
});

app.controller("ListCtrl",function  ($scope) {
	//
	$scope.ngos = [
    { name: "NGO Name",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "Gandhinagar", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic2.jpg"},
    { name: "NGO1",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "IN", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic.jpg"},
    { name: "NGO2",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "IN", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic2.jpg"},
    { name: "NGO3",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "IN", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic3.jpg"},
    { name: "NGO4",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "IN", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic4.jpg"},
    { name: "NGO5",   founded: 1900,  founder: "Name", tagline: "karke dikhayege", infromation:"We are very angry.", email:"xyz", city: "IN", state: "MP", phone: 8080808008, website:"link", image: "assets/ngos/pic1.jpg"},

  ];
$scope.mode = 1;


});