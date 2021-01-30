import {compilFunc, alrt1, alrt2} from './module.js';

const obj = compilFunc(alrt1('Matt', 8), alrt2(25));

obj.f1();
obj.f2();