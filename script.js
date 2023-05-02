function validateForm() {
    
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["lastname"].value;
    if (y== "") {
      alert(" Last Name must be filled out");
      return false;
    }
    let z= document.forms["myForm"]["place"].value;
    if (z== "") {
      alert("Enter the Emis Nummber Correctly");
      return false;
    }
    let a= document.forms["myForm"]["num"].value;
    if (a== "") {
      alert("Enter Your Emergency contact Number");
      return false;
    }
    let b= document.forms["myForm"]["cutoff"].value;
    if (b== "") {
      alert("Enter Your Cut Off");
      return false;
    }
  }