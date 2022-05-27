// pick a pivot value, first number or random
// iterate through rest of array
// sort every other number in array with respect to pivot
// smaller number | pivot | bigger numbers
// can repeat to the subarray left of pivot and sub array left of pivot

function MergeSort(array) {
    let animations = []
    MergeSortArray(array, 0,array.length-1, animations);
    for(let i = 0;i<array.length;i++){
        animations.push(['I',i,i]);
        animations.push(['F',i,array[i]]);
    }
    return animations
}
// left and right are pointers essentially
// swap left and right if -> left > pivot && right < pivot
// all values left of left index and all values right of right index is sorted with respect to pivot
function MergeSortArray(array, start, end, animations){
    if(start>=end) return;
    let pivot = start;
    let left = start+1;
    let right = end;
    animations.push(['I',pivot,pivot]);
    animations.push(['N',pivot,pivot]);
    while(left<=right){
        animations.push(['I',left,right]);
        animations.push(['N',left,right]);
        if(array[left]>array[pivot] && array[right] < array[pivot]){
            animations.push(['S',left,right]);
            animations.push(['SN',left,array[right]]);
            animations.push(['SN',right,array[left]]);
            animations.push(['N',left,right]);
            swap(left,right,array);
        }
// if any in correct spot then we just skip over it.
        if(array[left] <= array[pivot]) left++
        if(array[right] >= array[pivot]) right--;
    }
    animations.push(['S',pivot,right]);
    animations.push(['SN',pivot,array[right]]);
    animations.push(['SN',right,array[pivot]]);
    animations.push(['N',pivot,right]);
    swap(pivot,right,array);
    animations.push(['F',right,array[right]]);
// 	perform quick sort on the smaller sub array first for the space complexity
    MergeSortArray(array, start, right-1, animations);
    MergeSortArray(array, right+1, end, animations);
    return;
}
  
function swap(i,j,array){
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

export default MergeSort;