const accountId = 144553
let accountEmail = "viveksenjaliya1@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

// accountId = 2 // Not allowed

accountEmail = "abcd@gmail.com"
accountPassword = "54321"
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])