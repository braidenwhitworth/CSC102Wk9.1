function checkCreds() {
  console.log("checkCreds() function started");
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var badgeNumb = document.getElementById("badgeID").value;
  var fullName = firstName + " " + lastName;

  //Testing purposes
  console.log(
    "Full name is: " +
      fullName +
      ", Last name is: " +
      lastName +
      " and the Badge ID is: " +
      badgeNumb
  );

  //Checks fullName variable if its longer than 20 characters long or shorter than 2 characters, change loginStatus to "Invalid full name. Please try again."
  if (fullName.length > 20 || fullName.length < 2) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid full name. Please try again.";
    //Checks badgeNumb variable if its greater than 3 digits either positive or negative, if it is, then change lognStatus to "Invalid Badge ID. Please try again."
  } else if (badgeNumb > 999 || badgeNumb < -999) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid Badge ID. Please try again.";
    //If the submit did not fail the above two, send an alert saying "Access granted, welcome FULL NAME" Once user clicks ok, redirect to UATSpacePage.html
  } else {
    alert("Access granted, welcome " + fullName);
    location.replace("UATSpacePage.html");
  }
}
