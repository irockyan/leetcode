let sum = (arr, target) => {
    let map = new Map()
    for(let i = 0; i++; i< arr.length){
        let diff = target - arr[i]
        if(map.has(diff)) {
            return [map.get(diff),i]
        }
        map.set(arr[i],i);
    }
}
