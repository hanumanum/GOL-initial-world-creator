let matrix = fillZeroMatrix(5,5); 
let side = 22;
let palette = ["#FDFEFE","#52BE80","#F4D03F","#E74C3C","#3498DB","#7D3C98","#273746"];
let choosenColorIndex = 1;


$("#matrixCode").html(printMatrixText(matrix))

let palet ="";
for(var i in palette){
    let active = (choosenColorIndex==i)?"active-color":"";
    palet+="<div class='pallete-colors "+active+"' style='background-color:"+palette[i]+"'>"+ i +"</div>"
}
$("#palette").html(palet)
$(".pallete-colors").click(function(){
    choosenColorIndex = $(this).text();
    $(".pallete-colors").removeClass("active-color")
    $(this).addClass("active-color");
})


$(".matrixDims").click(function(){
    $(".matrixDims").removeClass("active")
    $(this).addClass("active");
})


$(".matrixDims").click(function(){
    let dim = $(this).html().split("x");
    matrix  = fillZeroMatrix(dim[0],dim[1])
    $("#matrixCode").html(printMatrixText(matrix))
})


$(".specials").click(function(){
    let specialMatrixName = ($(this).attr("src").split("/")[1]).split(".")[0]
    matrix = specials[specialMatrixName]
    $(".specials").removeClass("specials-active")
    $(this).addClass("specials-active")
    //console.log(specialMatrixName)
})

function setup(){
    let canvas = createCanvas(450,500)
    canvas.parent('sketch-holder')
    background("#ececec")
}

function draw(){
    background("#ececec")
    if(mouseIsPressed){
        drawPixels()
    }

    for(let y=0; y<matrix.length; y++){
        for(let x=0; x<matrix[y].length; x++){
            fill(palette[matrix[y][x]])
            rect(side*x, side*y, side, side)
        }   
    }

    $("#matrixCode").html(printMatrixText(matrix))
}


$("#matrixCode").mouseenter(function(){
    noLoop()
}).mouseleave(function(){
    loop()
});



function drawPixels(){
    let point = indexesByCoordinates(mouseX,mouseY,side)
    if(isInMatrix(point.x, point.y)){
        matrix[point.y][point.x] = parseInt(choosenColorIndex)
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


function indexesByCoordinates(x,y,side){
    let indexes = {
        x:0,
        y:0
    }
    
    indexes.x = Math.floor(x/side)
    indexes.y = Math.floor(y/side)

    return indexes;
}

function isInMatrix(x,y){
    return x>=0 && y>=0 && y<matrix.length && x<matrix[0].length
}


$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["backgroundColor"];
        else if (window.getComputedStyle) {
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        }
        if (bg.search("rgb") == -1) {
            return bg;
        } else {
            bg = bg.match(/\d+/g);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(bg[0]) + hex(bg[1]) + hex(bg[2]);
        }
    }
}