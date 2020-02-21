
var sayHello = function() {
 
}

try {
    throw {
        error:"error message", description:"custom error..."
    }
}catch(e) {
    console.log(e.description);
}finally{
    console.log("Finally, block has executed...");
}

