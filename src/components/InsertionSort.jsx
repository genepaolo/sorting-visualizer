// O(n^2)/O(1)
function InsertionSort(array) {
    let animations = [];
    for(let i = 0;i<array.length-1;i++){
        let insertNum = array[i+1];
        animations.push(['I',i,i]);
        animations.push(['N',i,i]);
        for(let j = i;j>=0;j--){
            
            if(insertNum < array[j]){
                animations.push(['S',j+1,j]);
                animations.push(['SN',j+1,array[j]]);
                animations.push(['SN',j,array[j+1]]);
                animations.push(['N',j+1,j]);
                swap(j+1,j, array);
                
            }
        }
    }
    for(let i = 0;i<array.length;i++){
        animations.push(['I',i,i]);
        animations.push(['F',i,array[i]]);
    }
    console.log(array);
    return animations;
}
  
function swap(i,j,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default InsertionSort;