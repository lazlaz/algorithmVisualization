

function  countSort(array) {
    if (array == null || array.length == 0) {
        return array;
    }
    var virtualArr = [];

    // 1.得到数列的最大值与最小值，并算出差值d
    var max = array[0];
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    var d = max - min;
    // 2.创建统计数组并计算统计对应元素个数
    var countArray = new Array(d + 1).fill(0);
    for (var i = 0; i < array.length; i++) {
        countArray[array[i] - min]++;

        var meta = {};
        meta.orginalArr = array.slice();
        meta.orginalIndex = i;
        meta.countArr = countArray.slice();
        meta.countIndex = array[i] - min;
        meta.sortArr = [];
        meta.sortIndex = 0;
        virtualArr.push(meta);
    }


    // 3.统计数组变形，后面的元素等于前面的元素之和
    var sum = 0;
    for (var i = 0; i < countArray.length; i++) {
        sum += countArray[i];
        countArray[i] = sum;

        var meta = {};
        meta.orginalArr = array.slice();
        meta.orginalIndex = 0;
        meta.countArr = countArray.slice();
        meta.countIndex = i;
        meta.sortArr = [];
        meta.sortIndex = 0;
        virtualArr.push(meta);
    }
    // 4.倒序遍历原始数组，从统计数组找到正确位置，输出到结果数组
    var sortedArray = new Array(array.length).fill(0);
    for (var i = array.length - 1; i >= 0; i--) {
        var meta = {};
        meta.sortIndex = countArray[array[i] - min] - 1;
        
        sortedArray[countArray[array[i] - min] - 1] = array[i];
        countArray[array[i] - min]--;

       
        meta.orginalArr = array.slice();
        meta.orginalIndex = i;
        meta.countArr = countArray.slice();
        meta.countIndex = array[i] - min;
        meta.sortArr = sortedArray.slice();
      
        virtualArr.push(meta);
    }
    return virtualArr;
}