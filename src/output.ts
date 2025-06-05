let file=JSON.parse('55');
console.log(file,file.type);
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let myArr: readonly string[] =['jacob']
console.log(myArr)

let tupple:readonly [string,number,boolean]=['keke',99,true];
let essay: [string,number];

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log([x,y],graph)

