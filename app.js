function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    return n1 + n2;
}
var combineValues;
combineValues = add;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// printResult(add(5, 12));
