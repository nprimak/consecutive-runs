var integerArray = [], indices = [];

function addInteger(e) {
    integerValue = document.getElementById('numberInput').value;
    integerArray.push(integerValue);
    document.getElementById('integerArray').value += (integerArray.length == 1 ? "" : ", " ) + integerValue;
    document.getElementById("numberInput").value = "";

};

var reset = function () {
    document.getElementById("indicesArray").innerHTML = "";
    document.getElementById('integerArray').innerHTML = "";
    integerArray = [];
    indices = [];

};

function searchConsecutiveNumbers() {
    indices = [];
    convertArrayStringToIntegerArray();
    for(var i = 0; i < integerArray.length; i++){
        if(integerArray[i]+1 === integerArray[i+1]){
            if(integerArray[i]+2 === integerArray[i+2]){
                indices.push(i);
            }
        }
        if(integerArray[i]-1 === integerArray[i+1]){
            if(integerArray[i]-2 === integerArray[i+2]){
                indices.push(i);
            }
        }
    }
    document.getElementById("indicesArray").getElementsByTagName("h1")[0].innerHTML = indices.join(", ");
    if(indices.length === 0){
        document.getElementById("indicesArray").getElementsByTagName("h1")[0].innerHTML = "NO INDICES FOUND";
    }
};

function convertArrayStringToIntegerArray() {
    for(var i = 0; i < integerArray.length; i++){
        integerArray[i] = parseInt(integerArray[i], 10);
    }
}