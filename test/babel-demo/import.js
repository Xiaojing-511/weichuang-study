import {a,c} from './export.js';   // 没用default export的 需要{}  变量名要和属性名一致
console.log(a,c);

import Person1 from './export.js';   //用default export的 不用{}   变量名不必须和属性名一致
console.log(new Person1('lisi',23).name);

 
// export :负责进行模块化，也是模块的输出。
// import : 负责把模块引入，也是模块的引入操作。
// 查看效果：在该文件的文件夹目录下运行终端命令 babel-node import.js  
    //  ES6的模块化不能直接在浏览器中预览，必须要使用Babel进行编译之后正常看到结果。
