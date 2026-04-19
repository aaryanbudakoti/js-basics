// const tinderUser = new Object(); // this is how we can create an object using the Object constructor

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "aadya";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);


const regularUser = {
    email: "aadya@example.com",
    fullname: {
        userfullname: {
            firstname: "aadya",
            lastname: "aggarwal"
        }
    }
} //nested object
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2} // this is how we can merge two objects using the spread operator

// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2) // this is how we can merge two objects using the Object.assign() method


const users = [
    {
        id: 1,
        email: "aadya@example.com",
    },
    {
        password: "123      abc",
    },
    {
        name: "aadya",
    }
]

