function isValidWalk(walk) {
  //insert brilliant code here

  //first trial
//   const set=new Set(walk);
//   if(walk.length===10){
//     if(set.size===2||set.size===4){
//         return true;
//     }
//   }
//   return false;
    let newobj={};
    if(walk.length===10){
        walk.forEach(ele => {
             newobj[ele] = (newobj[ele] || 0) + 1;
                });
        if(newobj.n===newobj.s && newobj.e===newobj.w)  return true      
    }
    return false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))