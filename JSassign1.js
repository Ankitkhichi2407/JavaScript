// import {data} from './file1.js'
// console.log(data);

// let obj = {
//     name : "ch",
//     age : '10'
//   }
 
// function swap(obj){
//     let ret = {};
//     for(let key in obj){
//       ret[obj[key]] = key;
//     }
//     return ret;
//   }
                                                                                                    
 
//   console.log(swap(obj))


let obj = {
    name: "Ankit",
    age: 27,
    aaaa:789,
    fgjhghj:7897987
  }

  const swapKV = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))

  console.log(swapKV(obj));

