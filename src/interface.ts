interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
console.log(user)
let message="Nzanira amafaranga wa mbwa we"
function terminator (izina:string,imyaka:number){
  return `izina:${izina},imyaka:${imyaka}`;
}
console.log(terminator('fozi',20))

