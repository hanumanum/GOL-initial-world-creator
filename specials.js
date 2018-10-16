/* ========================= ՍՏՈՒԳՄԱՆ և ՎՐԻՊԱԶԵՐԾՄԱՆ ՄԱՏՐԻՑՆԵՐ ==================================== */
//միայն խոտեր, միայն բազմանում են
var specials =  {
sp1_only1 :[
    [0,0,0,0,0,1,0,0],
    [1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0]
],

//միայն խոտակերներ, պիտի շարժվեն և սովից սատկեն
sp2_only2 : [
    [0,0,0,0,0,2,0,0],
    [2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2],
    [0,0,0,0,0,0,0,0]
],

//խոտեր և խոտակերներ, պիտի խոտակերները ուտեն խոտերը, բազմանան, ապա վերջում սատկեն
sp3_1and2 : [
    [2,1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,2],
    [1,0,0,0,0,0,0,0]
],

//Միայն գիշատիչներ, պիտի շարժվեն և սատկեն
sp4_only3 : [
    [3,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3]
],

//Գիշատիչներ և խոտեր, անտարբեր են իրար նկատմամբ
sp5_1and3 : [
    [3,0,0,0,0,0,0,0],
    [0,0,1,0,0,3,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,3]
],

//Գիշատիչներ և խոտակերներ
sp6_2and3 : [
    [3,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0],
    [2,2,2,2,2,2,2,2]
],

//Գիշատիչներ և խոտակերներ խիտ բաշխմամբ
sp7_2and3_more : [
    [3,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2]
]

}