
function swap(arr,i,j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
} 
function cocktailSort(arr){
  //start
  var virtualArr = [];
//end
 
  var len = arr.length;
  var left = 0;
  var right = len-1;
  while (left<right) {
    
    //前半轮，将最大元素放到后面
    for (var i=left;i<right;i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr,i,i+1);
        var meta = {};
        meta.swap = [i,i+1];
        meta.arr = arr.slice();
        virtualArr.push(meta);
      }
    }
    right--;
     //后半轮，将最小元素放到前面
    for (var i=right;i>left;i--) {
      if (arr[i]<arr[i-1]) {
        swap(arr,i,i-1);
        var meta = {};
        meta.swap = [i,i-1];
        meta.arr = arr.slice();
        virtualArr.push(meta);
      }
    }
    left++;
  }
  
  virtualArr.push({arr:arr});
//start
  return virtualArr;
//end
}
