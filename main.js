import {compilFunc, alrt1, alrt2} from './module.js';
document.getElementById("application").innerHTML = hello;

// Trigger the compilFunc. It adds 2 functions as items within the object obj.
const obj = compilFunc(alrt1('Matt', 8), alrt2(25));

// trigger the functions that are inside obj.
obj.f1();
obj.f2();