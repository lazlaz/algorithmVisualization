function CombSort(arr) {
  //start
  var virtualArr = [];
  //end

  var gap = arr.length;
  var swapped = true;
  while (gap > 1 || swapped) {
    if (gap > 1) {
      gap = parseInt(gap / 1.3);
    }
    var i = 0;
    swapped = false;
    while (i + gap < arr.length) {
      var meta = {};
      meta.swap = [i, i + gap];
      meta.arr = arr.slice();
      virtualArr.push(meta);
      if (arr[i] > arr[i + gap]) {
        swap(arr, i, i + gap);
        swapped = true;
      }
      i++;
    }
  }

  virtualArr.push({ arr: arr });
  //start
  return virtualArr;
  //end
}
function swap(arr, b, c) {
  if (b == c) return;
  var temp = arr[b];
  arr[b] = arr[c];
  arr[c] = temp;
}
