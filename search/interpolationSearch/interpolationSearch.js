function interpolationSearch(arr, target) {
  //用来进行可视化跟踪
  var virtualArr = [];

  if (target == null) {
    virtualArr.push({ arr: arr });
    return virtualArr;
  }
  var l = 0;
  var r = arr.length - 1;
  while (l <= r) {
    var mid = Math.floor(l+(target-arr[l])/(arr[r]-arr[l])*(r-l));
    var meta = {};
    meta.arr = arr;
    meta.range = [l, r];
    virtualArr.push(meta);

    if (arr[mid] > target) {
      r = mid - 1;
    }
    if (arr[mid] < target) {
      l = mid + 1;
    }
    if (arr[mid] == target) {
      var meta = {};
      meta.arr = arr;
      meta.range = [mid, mid];
      virtualArr.push(meta);
      return virtualArr;
    }
  }
  return virtualArr;
}
