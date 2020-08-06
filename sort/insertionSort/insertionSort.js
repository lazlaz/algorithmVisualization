function insertionSort(arr) {
  //start
  var virtualArr = [];
  //end

  var length = arr.length;
  for (var i = 1; i < length; i++) {
    if (arr[i - 1] > arr[i]) {
      var temp = arr[i];
      for (var j = i; j >= 0; j--) {
        if (j > 0 && arr[j - 1] > temp) {
          //获取可视化需要的元数据信息，方便可视化展示
          var meta = {};
          meta.swap = [j, j - 1];
          meta.arr = arr.slice();
          virtualArr.push(meta);

          arr[j] = arr[j - 1];
        } else {
          var meta = {};
          meta.swap = [j, j];
          meta.arr = arr.slice();
          virtualArr.push(meta);

          arr[j] = temp;
          break;
        }
      }
    }
  }

  virtualArr.push({ arr: arr });
  //start
  return virtualArr;
  //end
}
