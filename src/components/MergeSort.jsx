function MergeSort(array) {
    // Write your code here.
    let animations = []
    array = mergeHelper(array, animations);
    for(let i = 0;i<array.length;i++){
        animations.push(['I',i,i]);
        animations.push(['F',i,array[i]]);
    }
    return animations;
  }

  function mergeHelper(array, animations){
    if(array.length<=1) return array;
    let m = Math.floor(array.length/2);
    let arrayLeft = array.slice(0, m);
    let arrayRight = array.slice(m);
    return merge(mergeHelper(arrayLeft,animations), mergeHelper(arrayRight, animations), animations);
  }
  
  function merge(arrayOne, arrayTwo, animations){
      const sortedArray = new Array(arrayOne.length+arrayTwo.length);
      let i = 0, j = 0, k = 0;
      while(k<sortedArray.length){
          if(i<arrayOne.length && j<arrayTwo.length){
              if(arrayOne[i] < arrayTwo[j]){
                  sortedArray[k] = arrayOne[i++];
              }else{
                  sortedArray[k] = arrayTwo[j++];
              }
          }else if(i<arrayOne.length){
              sortedArray[k] = arrayOne[i++];
          }else{
              sortedArray[k] = arrayTwo[j++];
          }
          k++
      }
      return sortedArray;
  }

export default MergeSort;