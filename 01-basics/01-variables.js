const accountId= 144663
let accountEmail = "work.aaryanbudakoti@gmail.com"
var accountPassword = "12345"
accountCity="Jaipur"

console.log(accountId);

accountEmail="abc@gmail.com"
accountPassword ="123313"
accountCity="ghaziabad"
console.log()

console.table([accountId,accountEmail, accountPassword, accountCity])
/* Prefer not to use var, because of issue in block scope and functional scope */
