function compare(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    if (n1 > n2) {
      console.log("n1 is bigger");
    } else {
      console.log("n2 is bigger than n1");
    }
  } else {
    console.log("Invalid input");
  }
}
compare(2,3)
compare(2,"3")