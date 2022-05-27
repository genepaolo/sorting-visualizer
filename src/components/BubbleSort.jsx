// O(n^2)/O(1)
function BubbleSort(array) {
    let animations = [];
    for(let i = 0;i<array.length;i++){
        let currentMax = array[0];
        for(let j = 1;j<array.length-i;j++){
            if(currentMax>array[j]){
                animations.push(['S',j-1,j]);
                animations.push(['SN',j-1,array[j]]);
                animations.push(['SN',j,array[j-1]]);
                animations.push(['N',j-1,j]);

                swap(j-1, j, array);
            }else{
                animations.push(['I',j-1,j]);
                animations.push(['N',j-1,j]);
                currentMax = array[j];
            }
        }
        animations.push(['F',array.length-i-1,array[array.length-i-1]]);
    }
    return animations;
}
  
function swap(i,j,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default BubbleSort;