"use strict";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
console.log(user);
let message = "Nzanira amafaranga wa mbwa we";
function terminator(izina, imyaka) {
    return `izina:${izina},imyaka:${imyaka}`;
}
console.log(terminator('fozi', 20));
//# sourceMappingURL=interface.js.map