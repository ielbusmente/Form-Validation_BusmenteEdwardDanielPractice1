
var sayHello = function() {
 
}

try {
    sayHello();
}catch(e) {
    console.log("An error has occured...");
}finally{
    console.log("Finally, block has executed...");
}

