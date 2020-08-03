function quickSort(arr) {
  //用来进行可视化跟踪
  var virtualArr = [];
  //end

  if (arr == null || arr.length < 2) {
    return;
  }
  quickSort2(virtualArr,arr, 0, arr.length - 1);

  //start
  virtualArr.push({arr:arr});
  return virtualArr;
  //end
}

function quickSort2(virtualArr,arr, l, r) {
  if (l < r) {
	var p = partition(virtualArr,arr, l, r);
    quickSort2(virtualArr,arr, l, p[0]);
    quickSort2(virtualArr,arr, p[1], r);
  }
}

function partition(virtualArr,arr, l, r) {
 var basic = arr[r];
 var less = l-1; 
 var more = r+1;


 while (l<more) {
	 if (arr[l]>basic) {
		more--;
		swap(arr,l,more);	
		var meta = {};
		meta.swap = [l,more];
		meta.arr = arr.slice();
		virtualArr.push(meta);
	 } else if (arr[l]<basic) {
		less++;
		swap(arr,less,l);	
		var meta = {};
		meta.swap = [l,more];
		meta.arr = arr.slice();
		virtualArr.push(meta);
		l++;
	} else if (arr[l]==basic) {
		var meta = {};
		meta.swap = [l];
		meta.arr = arr.slice();
		virtualArr.push(meta);
		l++;
	}

 }

 return [less,more];
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
