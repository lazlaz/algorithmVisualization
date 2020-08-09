function deepCopy(o) {
  if (o instanceof Array) {
      var n = [];
      for (var i = 0; i < o.length; ++i) {
          n[i] = deepCopy(o[i]);
      }
      return n;

  } else if (o instanceof Object) {
      var n = {}
      for (var i in o) {
          n[i] = deepCopy(o[i]);
      }
      return n;
  } else {
      return o;
  }
}

function insertionSort(A) {
  if (A==null) {
    return;
  }
  for (let i = 1; i < A.length; i++) {
    let p = i - 1;
    const x = A[i];
    while (p >= 0 && A[p] > x) {
      A[p + 1] = A[p];
      p--;
    }
    A[p + 1] = x;
  }
}

function bucketSort(arr) {
  if (arr == null || arr.length == 0) {
    return arr;
  }
  //start
  var virtualArr = [];
  //end
  var max = arr[0];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  // 桶数
  var bucketNum = Math.floor((max - min) / arr.length) + 1;
  var bucketList = [];
  // 将每个元素放入桶
  for (var i = 0; i < arr.length; i++) {
    var num = Math.floor((arr[i] - min) / arr.length);
    if (bucketList[num] == null) {
      bucketList[num] = [];
    }
    bucketList[num].push(arr[i]);

    var meta = {};
    meta.swap = [i,i];
    meta.arr = arr.slice();
    meta.bucketList = deepCopy(bucketList);
    virtualArr.push(meta);
  }

  // 对每个桶进行排序
  for (var i = 0; i < bucketList.length; i++) {
    insertionSort(bucketList[i]);

    var meta = {};

    meta.arr = arr.slice();
    meta.bucketList = deepCopy(bucketList);
    virtualArr.push(meta);
  }

  //5.输出全部元素
  var k = 0;
  for (var i = 0; i < bucketList.length; i++) {
    for (var j = 0; bucketList[i]!=null&&j < bucketList[i].length; j++) {
      arr[k] = bucketList[i][j];

      var meta = {};
      meta.swap = [k,k];
      meta.arr = arr.slice();
      meta.bucketList = deepCopy(bucketList);
      virtualArr.push(meta);

      k++;
    }
  }

  virtualArr.push({ arr: arr,bucketList:bucketList });
  //start
  return virtualArr;
  //end
}