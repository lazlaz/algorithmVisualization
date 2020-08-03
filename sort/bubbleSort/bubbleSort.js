

function bubbleSort(arr){
    //start
    var virtualArr = [];
	//end
	 
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
			//start
            meta.swap = [j,j+1];
            meta.arr = arr.slice();
			//end
			
            virtualArr.push(meta);
        }
    }
	
	//start
    return virtualArr;
	//end
}
