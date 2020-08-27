

function selectSort(arr){
    var virtualArr = [];
	 
    var length = arr.length;
    for(var i=0;i<length-1;i++){
        var min = i;
        for(var j=i+1;j<length;j++){
          
          
            if(arr[j]<arr[min]){
              min = j;
               
            }
     
            var meta = {};
            meta.min = min;
            meta.arr = arr.slice();		
            virtualArr.push(meta);
        }
        if (i != min) {

            var meta = {};
            meta.swap = [i,min];
            meta.arr = arr.slice();		
            virtualArr.push(meta);

            var temp = arr[i];
            arr[i] =  arr[min];
            arr[min] = temp;

           
        }
    }
    
    virtualArr.push({arr:arr});
	//start
    return virtualArr;
	//end
}
