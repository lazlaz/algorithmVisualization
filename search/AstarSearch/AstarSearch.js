
function Node(x, y) {
  this.x = x;
  this.y = y;
  this.reach = true;
  this.setV = function(v) {
    this.v = v;
  }
  this.getV = function(v) {
    return this.v;
  }
  this.setP = function(n) {
    this.p  = n;
  }
  this.getP = function(n) {
    return this.p;
  }
  this.setG=function(v) {
    this.g = v;
  }
  this.setH=function(v) {
    this.h = v;
  }
  this.setF=function(v) {
    this.f = v;
  }
  this.setReach=function(v) {
    this.reach = v;
  }
};
var open=[];
var close=[];
var visited = [];
var visitedS = [];
var path = [];
function aStarSearch(arr) {
  var map = [];
  open=[];
  close=[];
  visitedS=[];
  path  = [];
  visited = [];
  var startNode = null
  var endNode = null;
  for (var i=0;i<arr.length;i++) {
    var row = [];
    for (var j=0;j<arr[0].length;j++) {
      var n = new Node(i,j);
      n.setV(arr[i][j]);
      if (arr[i][j] == '#') {
        n.setReach(false);
      }
      row.push(n);
      if (arr[i][j] == 'S') {
        startNode = n;
      }
      if (arr[i][j] == 'E') {
        endNode = n;
      }
    }
    map.push(row);
  }

  inOpen(startNode,map,endNode);
  close.push(startNode);
  startNode.setReach(false);
  startNode.setP(startNode);
  sort(open);
  // 重复步骤
  do {
    console.log("00000000");
    if (open.length==0) {
      console.log("找不到路径");
      break;
    }
    inOpen(open[0], map,endNode);
    inClose(open[0], open);
    sort(open);
    var ret1 = {
      visited:visited.slice(),
      path:path.slice()
    }
    visitedS.push(ret1);
  } while (!containes(open,endNode));
  // 知道开启列表中包含终点时，循环退出
  inClose(endNode, open);
  showPath(close, map,endNode,startNode);
  var ret1 = {
    visited:visited.slice(),
    path:path.slice()
  }
  visitedS.push(ret1);
  console.log(visitedS);
  return visitedS;
}
function showPath(arr,map,endNode,startNode) {
  if (arr.length > 0) {
    var node = new Node();
    node = endNode;
    while (!isStartNode(node,map,startNode)) {
      path.push(node);
      if (node.getP()!=null) {
        node.getP().setV("*");
        node = node.getP();
      } else {
        console.log(node,"parent is null");
        break;
      } 
    }
  }
  startNode.setV("A");
}
function isStartNode( node,  map,startNode) {
  return node.x ==startNode.x && node.y == startNode.y;
}
function inClose(n, nodes) {
  for (var i=0;i<nodes.length;i++) {
    var n1 = nodes[i];
    if (n1.x==n.x && n1.y == n.y) {
      // 设置为不可达
      n.setReach(false);
      //delete
      var len = open.length;
      
      removeArrEle(open,n1)
			close.push(n);
    }
  }
}
function removeArrEle(arr,n1) {
  var count = 0;
  for (var j=0;j<arr.length;j++) {       
    arr[count] = arr[j];
    if (arr[j].x == n1.x && arr[j].y == n1.y) {
    } else {
      count++;
    } 
  }
  arr.pop();   
}
function sort(arr) {
  for (var i = 0; i < arr.length- 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j].f > arr[i].f) {
        var tmp = new Node();
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}


function containes(nodes,n) {
  for (var i=0;i<nodes.length;i++) {
    var n1 = nodes[i];
    if (n1.x==n.x && n1.y == n.y) {
      return true;
    }
  }
  return false;
}
function containes2(visited,x,y) {
  if (visited==null) {
    return false;
  }
  for (var i=0;i<visited.length;i++) {
    if (visited[i].x==x&&visited[i].y==y) {
      return true;
    }
  }
  return false;
}
function getG(currentNode) {
  if (currentNode.getP() != null) {
    if (currentNode.x == currentNode.getP().x
        || currentNode.y == currentNode.getP().y) {
      // 判断当前节点与其父节点之间的位置关系（水平？对角线）
      return currentNode.g + 10;
    }
    return currentNode.g + 14;
  }
  return currentNode.g;
}
function getH(currentNode,endNode) {
  return (Math.abs(currentNode.x - endNode.x) + Math.abs(currentNode.y - endNode.y)) * 10;
}
function getF(currentNode) {
  return currentNode.g + currentNode.h;
}
function inOpen(n,map,endNode) {
  var x = n.x;
  var y = n.y;
  for (var i=0;i<3;i++){
    for (var j=0;j<3;j++) {
      var x1 = x-1+i;
      var y1 = y-1+j;
      // 判断条件为：节点为可到达的（即不是障碍物，不在关闭列表中），开启列表中不包含，不是选中节点
      if (x1>=0 && y1>=0 && x1<map.length&&y1<map.length&&map[x1][y1]!=null && map[x1][y1].reach && !containes(open,map[x1][y1]) && !(x == (x1) && y == (y1))) {
        map[x1][y1].setP(map[x][y]);
        map[x1][y1].setG(getG(map[x1][y1]));
        map[x1][y1].setH(getH(map[x1][y1],endNode));
        map[x1][y1].setF(getF(map[x1][y1]));
        open.push(map[x1][y1]);
        if (!containes2(visited,x1,y1)) {
          visited.push(map[x1][y1]);
        }

      }
    }
  }
}