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

// destructuring 

const course = {
    name: "javascript",
    price: 499,
    courseInstructor: "Aaryan"
}

// console.log(course.courseInstructor);


const {}= course; // this is how we can destructure an object

const {courseInstructor: teacher} = course; // this is how we can destructure an object and assign it to a variable, we can also rename the variable while destructuring

console.log(teacher);


// const navbar = ({company = "aaryan"}) => {

// }
// navbar({company: "aaryan"}) // this is how we can set a default value for a parameter in a function



//API - Application Programming Interface

// { // JSON - JavaScript Object Notation - a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
//     name : "aaryan",
//     course: "javascript",
//     price: "free"

// }


[
    //array form of JSON
    {
        name : "aaryan",     
}       

]

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// } // this is an example of a JSON response from an API, we can use this data to display it on our website or application

// we can use JSON Formatter to format the JSON data and make it more readable, we can also use JSON.stringify() method to convert a JavaScript object into a JSON string, and JSON.parse() method to convert a JSON string into a JavaScript object.