import {compilFunc, alrt1, alrt2} from './module.js';

// Trigger the compilFunc. It adds 2 functions as items within the object obj.
const obj = compilFunc(alrt1('Matt', 8), alrt2(25));

obj.f1();
obj.f2();