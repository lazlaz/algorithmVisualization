

function bubbleSort(arr){
    // virtualArr 用来存放 每一个步内容的数组
    var virtualArr = [];
    var length = arr.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-i-1;j++){
            //获取可视化需要的元数据信息，方便可视化展示
            var meta = {};
          
            if(arr[j]>arr[j+1]){
                //交换
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

               
            }
            meta.swap = [j,j+1];
            meta.arr = arr.slice();
            virtualArr.push(meta);
        }
    }
    return virtualArr;
}
