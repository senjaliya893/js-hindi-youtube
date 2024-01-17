// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

// **************** NESTED SCOPE ****************

function one(){
    
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);-





























    


    two()

}

// one()

if (true) {
    const username = "vivek"
    if (username === "vivek") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ******************** INTERSTING **********************

console.log(addone(5));

function addone(num){
    return num + 1
}


addTwo(5)

const addTwo = function(num){
    return num + 2
}

