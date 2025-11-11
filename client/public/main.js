import './public/style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>BINGO - LET'S TIME PASS</h1>
//     <div class="bingo-header" >
//       <div class="bingo-header-cell" id="B">B</div>
//       <div class="bingo-header-cell" id="I">I</div>
//       <div class="bingo-header-cell" id="N">N</div>
//       <div class="bingo-header-cell" id="G">G</div>
//       <div class="bingo-header-cell" id="O">O</div>
//     </div>
//     <div class="bingo-table" >
//       <div class="bingo-cell-empty" id="1"></div>
//       <div class="bingo-cell-empty" id="2"></div>
//       <div class="bingo-cell-empty" id="3"></div>
//       <div class="bingo-cell-empty" id="4"></div>
//       <div class="bingo-cell-empty" id="5"></div>
//       <div class="bingo-cell-empty" id="6"></div>
//       <div class="bingo-cell-empty" id="7"></div>
//       <div class="bingo-cell-empty" id="8"></div>
//       <div class="bingo-cell-empty" id="9"></div>
//       <div class="bingo-cell-empty" id="10"></div>
//       <div class="bingo-cell-empty" id="11"></div>
//       <div class="bingo-cell-empty" id="12"></div>
//       <div class="bingo-cell-empty" id="13"></div>
//       <div class="bingo-cell-empty" id="14"></div>
//       <div class="bingo-cell-empty" id="15"></div>
//       <div class="bingo-cell-empty" id="16"></div>
//       <div class="bingo-cell-empty" id="17"></div>
//       <div class="bingo-cell-empty" id="18"></div>
//       <div class="bingo-cell-empty" id="19"></div>
//       <div class="bingo-cell-empty" id="20"></div>
//       <div class="bingo-cell-empty" id="21"></div>
//       <div class="bingo-cell-empty" id="22"></div>
//       <div class="bingo-cell-empty" id="23"></div>
//       <div class="bingo-cell-empty" id="24"></div>
//       <div class="bingo-cell-empty" id="25"></div>

//     </div>

//   </div>
// `
// let filled=0;
// let user=true;
// const selectedcell=[];
// const computerselectedcell=[]
// const userdata=[];
// const computerdata=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// for(let i=0;i<25;i++){
//   console.log(Math.random()*(i+1));
//   let j = Math.floor(Math.random()*(i+1));
//   [computerdata[i],computerdata[j]]=[computerdata[j],computerdata[i]];
// }
// console.log(computerdata);
// const e=document.getElementsByClassName("bingo-cell");
// const c1=document.getElementById("1");
// const c2=document.getElementById("2");
// const c3=document.getElementById("3");
// const c4=document.getElementById("4");
// const c5=document.getElementById("5");
// const c6=document.getElementById("6");
// const c7=document.getElementById("7");
// const c8=document.getElementById("8");
// const c9=document.getElementById("9");
// const c10=document.getElementById("10");
// const c11=document.getElementById("11");
// const c12=document.getElementById("12");
// const c13=document.getElementById("13");
// const c14=document.getElementById("14");
// const c15=document.getElementById("15");
// const c16=document.getElementById("16");
// const c17=document.getElementById("17");
// const c18=document.getElementById("18");
// const c19=document.getElementById("19");
// const c20=document.getElementById("20");
// const c21=document.getElementById("21");
// const c22=document.getElementById("22");
// const c23=document.getElementById("23");
// const c24=document.getElementById("24");
// const c25=document.getElementById("25");
// if(confirm("lets play BINGO")){
//   alert("Touch the empty box to fix number in order");
// }
// else{
//   location.reload();
// }
// // function checkuser(user){
// //   if(user){
// //     document.getElementsByClassName("bingo-table")
// //   }else{

// //   }
// // }
// c1.addEventListener('click',(e)=>{
//   console.log(filled);
//   if(filled<25){
//     console.log(filled);
//     c1.className="bingo-cell-pre";
//     c1.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//       userdata.push(parseInt(c1.innerText));
//       userdata.push(parseInt(c2.innerText));
//       userdata.push(parseInt(c3.innerText));
//       userdata.push(parseInt(c4.innerText));
//       userdata.push(parseInt(c5.innerText));
//       userdata.push(parseInt(c6.innerText));
//       userdata.push(parseInt(c7.innerText));
//       userdata.push(parseInt(c8.innerText));
//       userdata.push(parseInt(c9.innerText));
//       userdata.push(parseInt(c10.innerText));
//       userdata.push(parseInt(c11.innerText));
//       userdata.push(parseInt(c12.innerText));
//       userdata.push(parseInt(c13.innerText));
//       userdata.push(parseInt(c14.innerText));
//       userdata.push(parseInt(c15.innerText));
//       userdata.push(parseInt(c16.innerText));
//       userdata.push(parseInt(c17.innerText));
//       userdata.push(parseInt(c18.innerText));
//       userdata.push(parseInt(c19.innerText));
//       userdata.push(parseInt(c20.innerText));
//       userdata.push(parseInt(c21.innerText));
//       userdata.push(parseInt(c22.innerText));
//       userdata.push(parseInt(c23.innerText));
//       userdata.push(parseInt(c24.innerText));
//       userdata.push(parseInt(c25.innerText));
//       // console.log(c1.innerText,"..");
//     }
//   }else{
//     // if(user){
//     c1.className="bingo-cell marked";
//     computerselectedcell.push(computerdata.indexOf(parseInt(c1.innerText)));
//     selectedcell.push(c1.id-1);
//     check(computerselectedcell);
//     check(selectedcell);
//     console.log(c1,selectedcell)
//     user=!user;
//     // }
//     // else{
//     for(let i=0;i<25;i++){
//       if(!computerselectedcell.includes(i)){
//         computerselectedcell.push(i);
//         let q = userdata.indexOf(computerdata[i])
//         selectedcell.push(q);
//         `c${q+1}.className="bingo-cell marked"`;
//         console.log(`c${q+1}.className="bingo-cell marked"`,"DONE..",i+1,userdata,computerdata,selectedcell,computerselectedcell);
//         check(computerselectedcell);
//         check(selectedcell);
//         user=!user;
//         break;
//       }
//     }
//   }
// });

// c2.addEventListener('click',(e)=>{
//   if(filled<25){
//     c2.className="bingo-cell-pre";
//     c2.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c2.className="bingo-cell marked";
//     selectedcell.push(c2.id-1);
//     check(selectedcell);
//     console.log(c2,selectedcell)
//   }
// });

// c3.addEventListener('click',(e)=>{
//   if(filled<25){
//     c3.className="bingo-cell-pre";
//     c3.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c3.className="bingo-cell marked";
//     selectedcell.push(c3.id-1);
//     check(selectedcell);
//     console.log(c3,selectedcell)
//   }
// });

// c4.addEventListener('click',(e)=>{
//   if(filled<25){
//     c4.className="bingo-cell-pre";
//     c4.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c4.className="bingo-cell marked";
//     selectedcell.push(c4.id-1);
//     check(selectedcell);
//     console.log(c4,selectedcell)
//   }
// });

// c5.addEventListener('click',(e)=>{
//   if(filled<25){
//     c5.className="bingo-cell-pre";
//     c5.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c5.className="bingo-cell marked";
//     selectedcell.push(c5.id-1);
//     check(selectedcell);
//     console.log(c5,selectedcell)
//   }
// });

// c6.addEventListener('click',(e)=>{
//   if(filled<25){
//     c6.className="bingo-cell-pre";
//     c6.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c6.className="bingo-cell marked";
//     selectedcell.push(c6.id-1);
//     check(selectedcell);
//     console.log(c6,selectedcell)
//   }
// });

// c7.addEventListener('click',(e)=>{
//   if(filled<25){
//     c7.className="bingo-cell-pre";
//     c7.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c7.className="bingo-cell marked";
//     selectedcell.push(c7.id-1);
//     check(selectedcell);
//     console.log(c7,selectedcell)
//   }
// });

// c8.addEventListener('click',(e)=>{
//   if(filled<25){
//     c8.className="bingo-cell-pre";
//     c8.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c8.className="bingo-cell marked";
//     selectedcell.push(c8.id-1);
//     check(selectedcell);
//     console.log(c8,selectedcell)
//   }
// });

// c9.addEventListener('click',(e)=>{
//   if(filled<25){
//     c9.className="bingo-cell-pre";
//     c9.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c9.className="bingo-cell marked";
//     selectedcell.push(c9.id-1);
//     check(selectedcell);
//     console.log(c9,selectedcell)
//   }
// });

// c10.addEventListener('click',(e)=>{
//   if(filled<25){
//     c10.className="bingo-cell-pre";
//     c10.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c10.className="bingo-cell marked";
//     selectedcell.push(c10.id-1);
//     check(selectedcell);
//     console.log(c10,selectedcell)
//   }
// });

// c11.addEventListener('click',(e)=>{
//   if(filled<25){
//     c11.className="bingo-cell-pre";
//     c11.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c11.className="bingo-cell marked";
//     selectedcell.push(c11.id-1);
//     check(selectedcell);
//     console.log(c11,selectedcell)
//   }
// });

// c12.addEventListener('click',(e)=>{
//   if(filled<25){
//     c12.className="bingo-cell-pre";
//     c12.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c12.className="bingo-cell marked";
//     selectedcell.push(c12.id-1);
//     check(selectedcell);
//     console.log(c12,selectedcell)
//   }
// });

// c13.addEventListener('click',(e)=>{
//   if(filled<25){
//     c13.className="bingo-cell-pre";
//     c13.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c13.className="bingo-cell marked";
//     selectedcell.push(c13.id-1);
//     check(selectedcell);
//     console.log(c13,selectedcell)
//   }
// });

// c14.addEventListener('click',(e)=>{
//   if(filled<25){
//     c14.className="bingo-cell-pre";
//     c14.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c14.className="bingo-cell marked";
//     selectedcell.push(c14.id-1);
//     check(selectedcell);
//     console.log(c14,selectedcell)
//   }
// });

// c15.addEventListener('click',(e)=>{
//   if(filled<25){
//     c15.className="bingo-cell-pre";
//     c15.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c15.className="bingo-cell marked";
//     selectedcell.push(c15.id-1);
//     check(selectedcell);
//     console.log(c15,selectedcell)
//   }
// });

// c16.addEventListener('click',(e)=>{
//   if(filled<25){
//     c16.className="bingo-cell-pre";
//     c16.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c16.className="bingo-cell marked";
//     selectedcell.push(c16.id-1);
//     check(selectedcell);
//     console.log(c16,selectedcell)
//   }
// });

// c17.addEventListener('click',(e)=>{
//   if(filled<25){
//     c17.className="bingo-cell-pre";
//     c17.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c17.className="bingo-cell marked";
//     selectedcell.push(c17.id-1);
//     check(selectedcell);
//     console.log(c17,selectedcell)
//   }
// });

// c18.addEventListener('click',(e)=>{
//   if(filled<25){
//     c18.className="bingo-cell-pre";
//     c18.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c18.className="bingo-cell marked";
//     selectedcell.push(c18.id-1);
//     check(selectedcell);
//     console.log(c18,selectedcell)
//   }
// });

// c19.addEventListener('click',(e)=>{
//   if(filled<25){
//     c19.className="bingo-cell-pre";
//     c19.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c19.className="bingo-cell marked";
//     selectedcell.push(c19.id-1);
//     check(selectedcell);
//     console.log(c19,selectedcell)
//   }
// });

// c20.addEventListener('click',(e)=>{
//   if(filled<25){
//     c20.className="bingo-cell-pre";
//     c20.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c20.className="bingo-cell marked";
//     selectedcell.push(c20.id-1);
//     check(selectedcell);
//     console.log(c20,selectedcell)
//   }
// });

// c21.addEventListener('click',(e)=>{
//   if(filled<25){
//     c21.className="bingo-cell-pre";
//     c21.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c21.className="bingo-cell marked";
//     selectedcell.push(c21.id-1);
//     check(selectedcell);
//     console.log(c21,selectedcell)
//   }
// });

// c22.addEventListener('click',(e)=>{
//   if(filled<25){
//     c22.className="bingo-cell-pre";
//     c22.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c22.className="bingo-cell marked";
//     selectedcell.push(c22.id-1);
//     check(selectedcell);
//     console.log(c22,selectedcell)
//   }
// });

// c23.addEventListener('click',(e)=>{
//   e.stopPropagation();
//   e.preventDefault();
//   if(filled<25){
//     c23.className="bingo-cell-pre";
//     c23.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c23.className="bingo-cell marked";
//     selectedcell.push(c23.id-1);
//     check(selectedcell);
//     console.log(c23,selectedcell)
//   }
// });

// c24.addEventListener('click',(e)=>{
//   if(filled<25){
//     c24.className="bingo-cell-pre";
//     c24.textContent=++filled;
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c24.className="bingo-cell marked";
//     selectedcell.push(c24.id-1);
//     check(selectedcell);
//     console.log(c24,selectedcell)
//   }
// });

// c25.addEventListener('click',(e)=>{
//   if(filled<25){
//     c25.className="bingo-cell-pre";
//     c25.textContent=++filled;
//     console.log(c25,selectedcell)
//     if(filled==25){
//       c1.className="bingo-cell"
//       c2.className="bingo-cell"
//       c3.className="bingo-cell"
//       c4.className="bingo-cell"
//       c5.className="bingo-cell"
//       c6.className="bingo-cell"
//       c7.className="bingo-cell"
//       c8.className="bingo-cell"
//       c9.className="bingo-cell"
//       c10.className="bingo-cell"
//       c11.className="bingo-cell"
//       c12.className="bingo-cell"
//       c13.className="bingo-cell"
//       c14.className="bingo-cell"
//       c15.className="bingo-cell"
//       c16.className="bingo-cell"
//       c17.className="bingo-cell"
//       c18.className="bingo-cell"
//       c19.className="bingo-cell"
//       c20.className="bingo-cell"
//       c21.className="bingo-cell"
//       c22.className="bingo-cell"
//       c23.className="bingo-cell"
//       c24.className="bingo-cell"
//       c25.className="bingo-cell"
//     }
//   }else{
//     c25.className="bingo-cell marked";
//     selectedcell.push(c25.id-1);
//     check(selectedcell);
//     console.log(c25,selectedcell)
//   }
// });



// function check(sc){
//   let count=0
//   console.log(sc.includes(0));
//   if(sc.includes(0)&&sc.includes(1)&&sc.includes(2)&&sc.includes(3)&&sc.includes(4)){
//    count+=1;
//   }
//   if(sc.includes(5)&&sc.includes(6)&&sc.includes(7)&&sc.includes(8)&&sc.includes(9)){
//     count+=1;
//   }
//   if(sc.includes(10)&&sc.includes(11)&&sc.includes(12)&&sc.includes(13)&&sc.includes(14)){
//     count+=1;
//   }
//   if(sc.includes(15)&&sc.includes(16)&&sc.includes(17)&&sc.includes(18)&&sc.includes(19)){
//     count+=1;
//   }
//   if(sc.includes(20)&&sc.includes(21)&&sc.includes(22)&&sc.includes(23)&&sc.includes(24)){
//     count+=1;
//   }
//   if(sc.includes(0)&&sc.includes(5)&&sc.includes(10)&&sc.includes(15)&&sc.includes(20)){
//     count+=1;
//   }
//   if(sc.includes(1)&&sc.includes(6)&&sc.includes(11)&&sc.includes(16)&&sc.includes(21)
//   ){
//     count+=1;
//   }
//   if(sc.includes(2)&&sc.includes(7)&&sc.includes(12)&&sc.includes(17)&&sc.includes(22)){
//     count+=1;
//   }
//   if(sc.includes(3)&&sc.includes(8)&&sc.includes(13)&&sc.includes(18)&&sc.includes(23)){
//     count+=1;
//   }
//   if(sc.includes(4)&&sc.includes(9)&&sc.includes(14)&&sc.includes(19)&&sc.includes(24)){
//     count+=1;
//   }
//   if(sc.includes(0)&&sc.includes(6)&&sc.includes(12)&&sc.includes(18)&&sc.includes(24)){
//     count+=1;
//   }
//   if(sc.includes(4)&&sc.includes(8)&&sc.includes(12)&&sc.includes(16)&&sc.includes(20)){
//     count+=1;
//   }

//   console.log(count)
//   let c=0;
//   while(count>0){
//     let e=['B','I','N','G','O'];
//     const d = document.getElementById(e[c++]);
//     d.className="bingo-header-cell marked"
//     console.log(count,c);
//     if(c>=5){{
//       alert("WON....")
//       window.location.reload();
//       };
//       console.log("Congratulation.... Won....");
//       break;
//     }
//     count--;
//   }
// };



// // <div class="bingo-cell" id="1">1</div>
// // <div class="bingo-cell" id="2">2</div>
// // <div class="bingo-cell" id="3">3</div>
// // <div class="bingo-cell" id="4">4</div>
// // <div class="bingo-cell" id="5">5</div>
// // <div class="bingo-cell" id="6">6</div>
// // <div class="bingo-cell" id="7">7</div>
// // <div class="bingo-cell" id="8">8</div>
// // <div class="bingo-cell" id="9">9</div>
// // <div class="bingo-cell" id="10">10</div>
// // <div class="bingo-cell" id="11">11</div>
// // <div class="bingo-cell" id="12">12</div>
// // <div class="bingo-cell" id="13">13</div>
// // <div class="bingo-cell" id="14">14</div>
// // <div class="bingo-cell" id="15">15</div>
// // <div class="bingo-cell" id="16">16</div>
// // <div class="bingo-cell" id="17">17</div>
// // <div class="bingo-cell" id="18">18</div>
// // <div class="bingo-cell" id="19">19</div>
// // <div class="bingo-cell" id="20">20</div>
// // <div class="bingo-cell" id="21">21</div>
// // <div class="bingo-cell" id="22">22</div>
// // <div class="bingo-cell" id="23">23</div>
// // <div class="bingo-cell" id="24">24</div>
// // <div class="bingo-cell" id="25">25</div> 

document.querySelector('#app').innerHTML = `
  <h1>BINGO GAME</h1>

  <div class="bingo-header">
    ${["B","I","N","G","O"].map(l=>`<div class='bingo-header-cell'>${l}</div>`).join("")}
  </div>

  <div class="bingo-table">
    ${Array.from({ length: 25 }, (_, i) =>
      `<div class='bingo-cell-empty' id='${i + 1}'></div>`).join("")}
  </div>

  <div id="winner"></div>
`;

let filled = 0;
let userdata = [];
let selectedcell = [];
let computerselectedcell = [];
let computerdata = [...Array(25)].map((_, i) => i + 1);
let gameOver = false;

/* ------------ SHUFFLE COMPUTER BOARD ------------ */
for (let i = 0; i < 25; i++) {
  let j = Math.floor(Math.random() * (i + 1));
  [computerdata[i], computerdata[j]] = [computerdata[j], computerdata[i]];
}

const cells = document.querySelectorAll('.bingo-cell-empty');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameOver) return;

    if (filled < 25) {
      fillNumbers(cell);
    } else {
      userTurn(cell, index);
    }
  });
});

/* ------------ USER FILLING 1–25 ------------ */
function fillNumbers(cell) {
  if (cell.textContent) return;

  filled++;
  cell.className = "bingo-cell-pre";
  cell.textContent = filled;

  if (filled === 25) finalizeUserGrid();
}

function finalizeUserGrid() {
  document.querySelectorAll(".bingo-cell-pre").forEach(c => {
    c.className = "bingo-cell";
    userdata.push(parseInt(c.textContent));
  });
}

/* ------------ USER TURN ------------ */
function userTurn(cell, index) {
  if (gameOver) return;
  if (cell.classList.contains("marked")) return;

  const number = userdata[index];
  cell.classList.add("marked");
  selectedcell.push(index);

  const compIndex = computerdata.indexOf(number);
  computerselectedcell.push(compIndex);

  checkWin();
  if (gameOver) return;

  setTimeout(computerTurn, 400);
}

/* =======================================================
      ✅ AGGRESSIVE 100% COMPUTER LOGIC IMPLEMENTED HERE
=========================================================*/
function computerTurn() {
  if (gameOver) return;

  const lines = [
    [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
    [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
    [0,6,12,18,24],[4,8,12,16,20]
  ];

  let bestMove = -1;
  let bestScore = -999;

  for (let i = 0; i < 25; i++) {
    if (computerselectedcell.includes(i)) continue;

    let score = 0;

    for (let line of lines) {
      if (line.includes(i)) {
        let compProgress = line.filter(x => computerselectedcell.includes(x)).length;
        let userProgress = line.filter(x => selectedcell.includes(x)).length;

        // ✅ Most aggressive scoring
        score += compProgress * 10;       // advance computer progress
        if (compProgress === 4) score += 500;  // winning move

        score += userProgress * 7;        // block user
        if (userProgress === 4) score += 300;  // critical block
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }

  /* ✅ Execute BEST MOVE */
  computerselectedcell.push(bestMove);

  let q = userdata.indexOf(computerdata[bestMove]);
  const cell = document.getElementById(String(q + 1));
  cell.classList.add("marked");

  selectedcell.push(q);

  checkWin();
}

/* ------------ CHECK WIN ------------ */
function checkWin() {
  const win = document.getElementById("winner");
  const userHeader = document.getElementsByClassName("bingo-header-cell");

  const lines = [
    [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
    [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
    [0,6,12,18,24],[4,8,12,16,20]
  ];

  let userLines = 0;
  let compLines = 0;

  lines.forEach(l => {
    if (l.every(i => selectedcell.includes(i))) userLines++;
    if (l.every(i => computerselectedcell.includes(i))) compLines++;
  });

  for (let i = 0; i < 5; i++) userHeader[i].classList.remove("marked");
  for (let i = 0; i < Math.min(5, userLines); i++) userHeader[i].classList.add("marked");

  if (userLines >= 5 || compLines >= 5) {
    gameOver = true;

    const userWon = userLines >= 5 && compLines < 5;

    win.innerHTML = `
      <div class='winner' style='color:${userWon ? "green" : "red"}'>
        ${userWon ? "🎉 YOU WIN! 🎉" : "💀 COMPUTER WINS 💀"}
      </div>
      ${compdata()}
    `;

    revealComputerBoard(compLines);
  }
}

/* ------------ COMPUTER BOARD ------------ */
function compdata() {
  return `
    <div class="bingo-header comp-header">
      ${["B","I","N","G","O"].map((l, i) => `<div class='bingo-header-cell' id='compH${i}'>${l}</div>`).join("")}
    </div>

    <div class="bingo-table">
      ${Array.from({ length: 25 }, (_, i) =>
        `<div class='bingo-cell final' id='c${i + 1}'></div>`).join("")}
    </div>
  `;
}

function revealComputerBoard(compLines) {
  document.querySelectorAll(".bingo-cell.final").forEach(c => {
    const id = parseInt(c.id.replace("c", ""));
    c.textContent = computerdata[id - 1];

    if (computerselectedcell.includes(id - 1)) {
      c.classList.add("marked");
    }
  });

  for (let i = 0; i < compLines && i < 5; i++) {
    document.getElementById("compH" + i).classList.add("marked");
  }
}
