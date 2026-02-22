/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   move4times();
   turnLeft();
   move4times();
}

                                //moving a box bottomleft to topright
function move4times(){
   move();
   move();
   move();
   move();

}
//===================================

// 2nd code
//putting box diagonal-move-putBeeper code


function main(){
   putBeeper();
   circle();
   circle();
   circle();
   circle();
}

function circle(){
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

//=========================================================

// code 3

function main(){
   lines2();
   lines2();
   last();
}

function lines2(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}

function last(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}