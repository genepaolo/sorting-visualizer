function MergeSort(array){
    let animations = new Array();
    startMergeSort(array, animations);
    for(let i = 0;i<array.length;i++){
        animations.push(['I',i,i]);
        animations.push(['F',i,array[i]]);
    }
    return animations;
}

function startMergeSort(array, animations) {
    // Write your code here.
    if(array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxArray, animations);
    return array;
}
function mergeSortHelper(array, l, r,auxArray, animations){
    if(l==r) return;
    const m = Math.floor( (l+r)/2);
    animations.push(['I',m,m]);
    animations.push(['N',m,m]);
    mergeSortHelper(auxArray, l,  m, array, animations);
    mergeSortHelper(auxArray,m+1, r, array, animations);
    merge(array,l,m,r,auxArray, animations);
}
  
function merge(array, left, middle, right, auxArray, animations){
    let k = left, i = left, j = middle+1
    while(i <= middle && j<=right){
        if(auxArray[i] <= auxArray[j]){
            animations.push(['SN',k,auxArray[i]]);
            array[k++] = auxArray[i++];
        }else{
            animations.push(['SN',k,auxArray[j]]);
            array[k++] = auxArray[j++];
        }
    }
    while (i<=middle){
        animations.push(['SN',k,auxArray[i]]);
        array[k++] = auxArray[i++];
    }
    while (j<=right){
        animations.push(['SN',k,auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}

export default MergeSort;