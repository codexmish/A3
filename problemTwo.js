function validOtp(otp) {
  if (typeof otp !== "string") {
    // console.log("Invalid");
    return "Invalid";
  } else if (otp.length !== 8) {
    // console.log(false);
    return false;
  } else if (otp.slice(0, 3) === !"ph-") {
    // console.log(false);
    return false;
  }
//   console.log(true);
  return true;
}

// validOtp("22fdwfwf");
