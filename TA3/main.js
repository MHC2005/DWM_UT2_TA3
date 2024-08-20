function removeFromArray(arreglo, item){
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] === item){
            arreglo.splice(i, 1);
        }
    }
    return arreglo;
}

console.log(removeFromArray([1, 2, 3, 4, 5], 1));