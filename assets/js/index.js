// Get the date when website is last updated and modified and display it in its own element
var lastModified = new Date(document.lastModified);
var lastModifiedDate = lastModified.getDate();
var lastModifiedMonth = lastModified.getMonth() + 1;
var lastModifiedYear = lastModified.getFullYear();
var lastModifiedDateString = lastModifiedDate + "/" + lastModifiedMonth + "/" + lastModifiedYear;
document.getElementById("lastModified").innerHTML = lastModifiedDateString;