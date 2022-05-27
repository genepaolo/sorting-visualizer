function SelectionSort(array) {
    // Write your code here.
    let animations = [];
    for(let i = 0;i<array.length-1;i++){
        let minVal = array[i];
        let minIndex = i;
        for(let j = i+1;j<array.length;j++){
            if(minVal>array[j]){
                minVal = array[j];
                minIndex = j;
                animations.push(['I',i,j]);
                animations.push(['N',i,j]);
            }
        }
        animations.push(['S',i,minIndex]);
        animations.push(['SN',i,array[minIndex]]);
        animations.push(['SN',minIndex,array[i]]);
        animations.push(['N',i,minIndex]);
        swap(i,minIndex,array);
        animations.push(['F',i,array[i]]);
    }
    animations.push(['F',array.length-1,array[array.length-1]]);
    return animations;
}
  
function swap(i,j,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default SelectionSort;