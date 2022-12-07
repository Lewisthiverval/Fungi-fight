import React from "react";

/////////////////p5/////////////////////////////
// let symbol: any;
// let canvas: any;
// let symbolSize = 24;
// let streams: any = [];

// const setup = (p5: p5Types, canvasParentRef: Element) => {
//   canvas = p5
//     .createCanvas(p5.windowWidth, p5.windowHeight)
//     .parent(canvasParentRef);
//   canvas.position(0, 0);
//   canvas.style("z-index", "-1");
//   p5.background(228, 177, 206);

//   function Stream() {
//     this.symbols = [];
//     this.totalSymbols = p5.round(p5.random(5, 40));
//     this.speed = p5.random(0.2, 2);
//     // this.speed = 1.5;

//     this.generateSymbols = function (x: number, y: number) {
//       for (let i = 0; i <= this.totalSymbols; i++) {
//         symbol = new Symbol(x, y, this.speed);
//         symbol.setToRandomSymbol();
//         this.symbols.push(symbol);
//         y -= symbolSize;
//       }

//       this.render = function () {
//         this.symbols.forEach(function (symbol: any) {
//           // p5.fill(255, 105, 180, 255);
//           // p5.fill(228, 177, 206);
//           p5.fill(255, 20, 147, 100);

//           p5.text(symbol.value, symbol.x, symbol.y);
//           symbol.rain();
//           symbol.setToRandomSymbol();
//         });
//       };
//     };
//   }

//   function Symbol(x: number, y: number, speed: number) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     this.value;
//     this.switchInterval = p5.round(p5.random(2, 20));

//     this.setToRandomSymbol = () => {
//       let randNum = p5.random(0, 1);
//       if (p5.frameCount % this.switchInterval === 0) {
//         this.value =
//           randNum > 0.6
//             ? String.fromCharCode(0x30a0 + p5.round(p5.random(0, 96)))
//             : p5.round(p5.random(0, 1));
//       }
//     };

//     this.rain = function () {
//       this.y = this.y >= p5.height ? (this.y = 0) : (this.y += this.speed);
//     };
//   }
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < p5.width / symbolSize; i++) {
//     let stream = new Stream();
//     stream.generateSymbols(x, y);
//     streams.push(stream);
//     x += symbolSize;
//   }

//   p5.textSize(symbolSize);
// };

// const draw = (p5: p5Types) => {
//   p5.background(228, 177, 206);
//   streams.forEach(function (stream: any) {
//     stream.render();
//   });
// };
