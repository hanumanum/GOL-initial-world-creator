let matrix = []; 
let side = 20;
let palette = ["#FDFEFE","#52BE80","#F4D03F","#E74C3C","#273746","#7D3C98"];
let choosenColor = palette[0];


matrix  = fillZeroMatrix(5,5)
$("#matrixCode").html(printMatrixText(matrix))

let palet ="";
for(var i in palette){
    palet+="<div class='pallete-colors' style='background-color:"+palette[i]+"'>"+ i +"</div>"
}
$("#palette").html(palet)
$(".pallete-colors").click(function(){
    choosenColor = $(this).css("background-color");
    console.log(choosenColor);
})


$(".matrixDims").click(function(){
    let dim = $(this).html().split("x");
    matrix  = fillZeroMatrix(dim[0],dim[1])
    $("#matrixCode").html(printMatrixText(matrix))
})


function setup(){
    let canvas = createCanvas(900,500)
    canvas.parent('sketch-holder')
    background("#ececec")
}

function draw(){
    background("#ececec")
    for(let y=0; y<matrix.length; y++){
        for(let x=0; x<matrix[y].length; x++){
            rect(side*x, side*y, side, side) 
        }   
    }
}



function fillZeroMatrix(row,column){
    let matrix = [];
    for(let r = 0 ; r<row ; r++){
        matrix.push([]);
        for(let c = 0; c<column; c++){
            matrix[r].push(0);   
        }
    }

    return matrix;

}


function printMatrixText(matrix) {
    var text = "var matrix = [ <br>";
    for (var y = 0; y < matrix.length; y++) {
      text += "&nbsp&nbsp&nbsp&nbsp&nbsp[";
      for (var x = 0; x < matrix[0].length; x++) {
        text += matrix[y][x]
        if (x < matrix[0].length - 1) {
          text += ',';
        }
      }
      text += "]";
      if (y < matrix.length - 1) {
        text += ",<br>";
      }
    }
  
    text += "<br>]";
    return text;
  
  }