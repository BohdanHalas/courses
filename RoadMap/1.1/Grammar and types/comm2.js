function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("wo");

function comment2() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment2();
