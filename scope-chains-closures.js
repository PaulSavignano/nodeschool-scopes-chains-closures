// 3. Global Scope & Shadowing
function foo() {
  var bar;
  quux = 0;
  function zip() {
    var quux = 1;
  }
}
