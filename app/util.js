function randomFrom(array) {
  return array[Math.floor(Math.random()*array.length)]
}

function filter_available(item) {
  return !item.unreleased
}

String.prototype.format = function(scope) {
    reg = new RegExp("{([^{}]+)}", "g");
    var m;
    var s = this;
    while ((m = reg.exec(s)) !== null) {
        s = s.replace(m[0], scope[m[1]]);
    }
    return s;
};

angular.module('splatApp').util = function($scope) {

}
