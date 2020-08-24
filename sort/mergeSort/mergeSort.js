
var virtualArr = [];
function mergeSort(arr) {
    if (arr == null || arr.length == 0) {
        return ;
    }
    var len = arr.length;
    var result = [];
    mergeSortRecursive(arr, result, 0, len - 1,0);
    return virtualArr;
}

function mergeSortRecursive(arr, result, start,end,level) {
    var meta = {};
    meta.level = level;
    meta.arr = arr.slice();
    meta.start = start;
    meta.end = end;
    virtualArr.push(meta);
    if (start >= end)
        return;
    var len = end - start, mid = (len >> 1) + start;
    var start1 = start, end1 = mid;
    var start2 = mid + 1, end2 = end;

    level++;
    mergeSortRecursive(arr, result, start1, end1,level);
    
    mergeSortRecursive(arr, result, start2, end2,level);

 

    var k = start;
    //合并两个归并结果，保证有序
    while (start1 <= end1 && start2 <= end2)
        result[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
    
    //合并剩余的
    while (start1 <= end1)
        result[k++] = arr[start1++];
    
    //合并剩余的
    while (start2 <= end2)
        result[k++] = arr[start2++];
    for (k = start; k <= end; k++)
        arr[k] = result[k];
    
    
}