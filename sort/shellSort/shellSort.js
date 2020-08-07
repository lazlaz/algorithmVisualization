function shellSort(arr) {
    var virtualArr = [];

    var n = arr.length;
    for (var gap=n/2;gap>0;gap=gap/2) {
        gap = Math.floor(gap);
        for (var i=gap;i<n;i++) {
            insertI(virtualArr,arr,gap,i);
        }
    }
    virtualArr.push({ arr: arr });
    return virtualArr;
}
function insertI(virtualArr,arr,gap,i) {
    var flag = arr[i];
    for (var j=i-gap;j>=0 && flag<arr[j];j-=gap) {
            var meta = {};
            meta.swap = [j, j +gap];
            meta.arr = arr.slice();
            virtualArr.push(meta);
            arr[j+gap] = arr[j];

    }
    arr[j+gap] = flag;
}