// 1. Scopes
function foo() {
  var bar;
}



// 2. Scope Chains
function foo() {
  var bar;
  function zip() {
    var quux;
  }
}
