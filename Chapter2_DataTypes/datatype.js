
function compare(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    if (n1 > n2) {
      console.log("n1 is greater than n2");
    }else if (n1 === n2) {
        console.log("n1 is equal to n2");
    } 
    else {
      console.log("n2 is greater than n1");
    }
  }
  else{
    throw new Error("Invalid input: both arguments must be numbers.");
  }
}

compare(1,1);