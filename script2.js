console.log("script running");



// Conected to the ProtoSphere
const theMainSphere = document.querySelector("#protoSphere");

// checked to make sure the querySelector worked
console.log(theMainSphere);

// it's a callback
theMainSphere.addEventListener("click", sphereClicked);

// it's a funciton that logs when you click on the sphere
function sphereClicked(){
    console.log("you clicked the sphere");
    addCircle();
}

//Get the container from DOM
const theContainer  = document.querySelector("#container");
console.log(theContainer);


// var x = 1;
// var y = 1;
var t = 0;
var radius = 1;
var radius2 = 4;
var n = 10;

function addCircle(){
    console.log("Spheres added")
    for(var i = 0; i < n; i++){
        theContainer.innerHTML += `<a-sphere position="${(Math.sin(t)*radius2)} ${(Math.cos(t)*radius2 + 1.5 )} -5" color="yellow" radius="${radius}"></a-sphere>`
        console.log(i)
        t += (2*Math.PI)/n
    }
    radius2++
    n++
}




