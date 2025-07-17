import "../../node_modules/uikit/dist/js/uikit.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// let zoomer = (function () {
//     document.querySelector("header").addEventListener(
//         "mousemove",
//         function (e) {
//             let original = document.querySelector("header"),
//                 style = document.querySelector(".background-effect").style,
//                 x = e.pageX - this.offsetLeft,
//                 y = e.pageY - this.offsetTop,
//                 imgWidth = original.offsetWidth,
//                 imgHeight = original.offsetHeight,
//                 xperc = (x / imgWidth) * 100,
//                 yperc = (y / imgHeight) * 100;

//             style.backgroundPositionX = xperc - 9 + "%";
//             style.backgroundPositionY = yperc - 9 + "%";
//             style.left =
//                 x - document.querySelector(".background-effect").offsetWidth / 2 + "px";
//             style.top =
//                 y -
//                 document.querySelector(".background-effect").offsetHeight / 2 +
//                 "px";
//             //   setInterval (function(){
//             //             style.backgroundPositionX = xperc - 9 + "%";
//             //             style.backgroundPositionY = yperc - 9 + "%";
//             //       style.left =
//             //         x - document.querySelector(".background-effect").offsetWidth / 2 + "px";
//             //       style.top =
//             //         y -
//             //         document.querySelector(".background-effect").offsetHeight / 2 +
//             //         "px";
//             //   },1000/60)
//         },
//         false
//     );
// })();
