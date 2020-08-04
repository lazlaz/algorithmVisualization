function createRandomId() {
    return (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
}

function createBinaryTree(arr) {
    var root = {};
    var low = 0;
    var high = arr.length-1;
    var mid = Math.floor((low+high)/2);
    root.value = arr[mid];
    root.id = createRandomId();
    if (mid>=0) {
        root.left=createBinaryTree(arr.slice(0,mid));
    } else {
        root.left = null;
    }
    if (mid<arr.length-2) {
        root.right=createBinaryTree(arr.slice(mid+1,arr.length))
    } else {
        root.left = null;
    }
    return root;
   
}

function preorderTraversal(tree) {
    var virtualArr = [];
    var data = {};
    data.id = tree.id;
    data.value = tree.value;
    virtualArr.push(data);
    preOrder(virtualArr,tree.left);
    preOrder(virtualArr,tree.right);
    return virtualArr;
}

function preOrder(arr,tree) {
    if (tree == null) {

    } else {
        var data = {};
        data.id = tree.id;
        data.value = tree.value;
        arr.push(data);
        preOrder(arr,tree.left);
        preOrder(arr,tree.right);
    }
}

function infixOderTraversal(tree) {
    var virtualArr = [];
    infixOder(virtualArr,tree.left);
   

    var data = {};
    data.id = tree.id;
    data.value = tree.value;
    virtualArr.push(data);
    infixOder(virtualArr,tree.right);
    return virtualArr;
}
function infixOder(arr,tree) {
    if (tree == null) {

    } else {
        infixOder(arr,tree.left);
        
        var data = {};
        data.id = tree.id;
        data.value = tree.value;
        arr.push(data);
        infixOder(arr,tree.right);
    }
}

function postOderTraversal(tree) {
    var virtualArr = [];
    postOder(virtualArr,tree.left);
    postOder(virtualArr,tree.right);

    var data = {};
    data.id = tree.id;
    data.value = tree.value;
    virtualArr.push(data);
  
    return virtualArr;
}
function postOder(arr,tree) {
    if (tree == null) {

    } else {
        postOder(arr,tree.left);
        postOder(arr,tree.right);
        var data = {};
        data.id = tree.id;
        data.value = tree.value;
        arr.push(data);
       
    }
}

function levelTraversal(tree) {
    var virtualArr = [];
    var data = {};
    data.id = tree.id;
    data.value = tree.value;
    virtualArr.push(data);

    if (tree.left != null) {
        var data = {};
        data.id = tree.left.id;
        data.value = tree.left.value;
        virtualArr.push(data);    
    }
    if (tree.right != null) {
        var data = {};
        data.id = tree.right.id;
        data.value = tree.right.value;
        virtualArr.push(data);    
    }
    level(virtualArr,tree.left);
    level(virtualArr,tree.right);

  
  
    return virtualArr;
}
function level(arr,tree) {
    if (tree == null) {

    } else {
      

        if (tree.left != null) {
            var data = {};
            data.id = tree.left.id;
            data.value = tree.left.value;
            arr.push(data);    
        }
        if (tree.right != null) {
            var data = {};
            data.id = tree.right.id;
            data.value = tree.right.value;
            arr.push(data);    
        }

        level(arr,tree.left);
        level(arr,tree.right);
    }
}
