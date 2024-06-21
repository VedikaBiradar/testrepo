// function box(){
//
//     let width=document.getElementById("width").value;
//     width=parseInt(width);
//     let height=document.getElementById("height").value;
//     height=parseInt(height);
//
//       document.write("Your box shape is <br> ");
//
//
//
//       let star;
//         for(let i=0;i<height;i++){
//             for(j=0;j<width;j++){
//              document.write("*");
//             }
//             document.write("<br>");
//         }
//
//
// }
//
//
// function checkerboard() {
//
//
//     let width = document.getElementById("width").value;
//     width = parseInt(width);
//     let height = document.getElementById("height").value;
//     height = parseInt(height);
//
//     document.write("Your checkboard shape is <br> ");
//     for (let row = 0; row < height; row++) {
//         for (let col = 0; col < width; col++) {
//             if((row+col)%2==0){
//                 document.write("*");
//             }
//             else{
//                 document.write(" ");
//             }
//         }
//          document.write("<br>")
//     }
// }
// function cross() {
//     let size = document.getElementById("size").value;
//     size = parseInt(size);
//     let output = "";
//
//     for (let row = 0; row < size; row++) {
//         for (let col = 0; col < size; col++) {
//             if (col === row || col === size - row - 1) {
//                 output += "*";
//             } else {
//                 output += " ";
//             }
//         }
//         output += "<br>";
//     }
//
//     document.getElementById("crossbox").innerHTML = output;
// }
//
//
// function lowertriangle(){
//     let size = document.getElementById("size").value;
//     size = parseInt(size);
//
//     for(let i=0;i<size;i++){
//         for(let j=0;j<size;j++){
//             if(j<i){
//                 document.write("*")
//             }
//         }
//         document.write("<br>")
//     }
//
// }
//
//     function uppertriangle(){
//         let size = document.getElementById("size").value;
//         size = parseInt(size);
//
//         for(let i=size;i>0;i--){
//             for(let j=size;j>0;j--){
//                 if(j<i){
//                     document.write("*")
//                 }
//             }
//             document.write("<br>")
//         }
//
//     }
//
//     function upsidedowntrapezoid() {
//         let width = document.getElementById("width").value;
//         width = parseInt(width);
//         let height = document.getElementById("height").value;
//         height = parseInt(height);
//
//         let result = document.getElementById('upsidedown');
//         result.textContent = '';
//
//         if (width - 2 * (height - 1) <= 0) {
//             result.textContent = 'Impossible shape!';
//             return;
//         }
//
//         let spaces = 0;
//         let stars = width;
//
//         for (let i = 0; i < height; i++) {
//             result.textContent += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
//             spaces += 1;
//             stars -= 2;
//         }
//
//
//


