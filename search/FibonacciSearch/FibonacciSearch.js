const MAXSIZE = 20;
function fibonacci() {
    var f = [];
    var i = 0;
    f[0] = 1;
    f[1] = 1;
    for (i = 2; i < MAXSIZE; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f;
}

function fibonacciSearch(arr, target) {
    //用来进行可视化跟踪
    var virtualArr = [];
  
    if (target == null) {
      virtualArr.push({ arr: arr });
      return virtualArr;
    }
    var low = 0;
    var high = arr.length - 1;
    var mid = 0;

    // 斐波那契分割数值下标
    var k = 0;
    // 序列元素个数
    var i = 0;
    // 获取斐波那契数列
    var f = fibonacci();

    // 获取斐波那契分割数值下标
    while (arr.length > f[k] - 1) {
        k++;
    }

    // 创建临时数组
    var temp = [];
    for (var j = 0; j < arr.length; j++) {
        temp[j] = arr[j];
    }

    // 序列补充至f[k]个元素
    // 补充的元素值为最后一个元素的值
    for (i = arr.length; i < f[k] - 1; i++) {
        temp[i] = temp[high];
    }

    while (low <= high) {
        // low：起始位置
        // 前半部分有f[k-1]个元素，由于下标从0开始
        // 则-1 获取 黄金分割位置元素的下标
        mid = low + f[k - 1] - 1;

        var meta = {};
        meta.arr = arr;
        meta.range = [low, high];
        virtualArr.push(meta);

        if (temp[mid] > target) {
            // 查找前半部分，高位指针移动
            high = mid - 1;
            // （全部元素） = （前半部分）+（后半部分）
            // f[k] = f[k-1] + f[k-1]
            // 因为前半部分有f[k-1]个元素，所以 k = k-1
            k = k - 1;
        } else if (temp[mid] < target) {
            // 查找后半部分，高位指针移动
            low = mid + 1;
            // （全部元素） = （前半部分）+（后半部分）
            // f[k] = f[k-1] + f[k-1]
            // 因为后半部分有f[k-1]个元素，所以 k = k-2
            k = k - 2;
        } else {
            // 如果为真则找到相应的位置
            if (mid <= high) {
                var meta = {};
                meta.arr = arr;
                meta.range = [mid, mid];
                virtualArr.push(meta);

                return virtualArr;
            } else {
                var meta = {};
                meta.arr = arr;
                meta.range = [high, high];
                virtualArr.push(meta);

                // 出现这种情况是查找到补充的元素
                // 而补充的元素与high位置的元素一样
                return virtualArr;
            }
        }
    }
    return virtualArr;

  }
  