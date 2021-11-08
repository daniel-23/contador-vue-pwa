if("serviceWorker" in navigator){
    console.log("Puede usar SW");
    navigator.serviceWorker.register("./sw.js").then(reg =>{
        console.log("Se registro el SW");
    }).catch(err =>{
        console.log("Error al registrar el SW", err);

    });
}