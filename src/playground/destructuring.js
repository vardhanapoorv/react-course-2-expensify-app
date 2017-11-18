//Object destructuring

// const person = {
//     name: 'Apoorv',
//     age: 23,
//     location: {
//         city: 'Bangalore',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymous', age} = person;

// const {city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}`);

// if (city && temperature) {
//    console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = ['A-12 shanti nagar', 'Bangalore', 'Karnataka', '560076'];
const [, city, state = 'Delhi'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$2.75'];
const [Coffee, , cost] = item;

console.log(`A medium ${Coffee} costs ${cost}`);