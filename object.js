// const contact ={
//     phonenumber: '0330-2183339,
//     email: 'abdullatifabro1947@gmail.com',
//     name: 'abdul',
//     address: {
//         city: "Karachi",
//         province: "Sindh",
//         country: "Pakistan",
//     },
//     greet(){
//         return `Hello ${this.name}. I Live in ${this.address.city}`//the keyword 'this' means search from this object's scope
//     }
// };
// let contact2 = contact;
// console.log(contact2);

// contact2.name ='no name'//it will update contact becuz it copies contact address and go in contact so object cannot be copied

// console.log(contact);


// console.log(contact.greet());
// // console.log(Math);


const object1 = {
    message: 'Hello',
}
const object2=object1;
const object3 = {
    message: 'Hello'
}
console.log(object1==object2);//true becuz they are same
console.log(object1==object3);//false becuz they are not


// // let myar =[[1,2],[3,4]]
// // console.log(myar[0][1]);// output: 2,

//add new keyvaluepair
// contact.linkedinid = 'my_id'// console.log(contact);


//modify keyvaluepair
// contact.email ='no-email'
// console.log(contact);



// //delet keyvalue pair
// console.log(contact);
// delete contact.name
// console.log(contact);

// console.log(contact.name);// value of the keyvaluepair "name" will be comeout 
// console.log(contact.address.city);//nested object calling


//generating new vriables
// for (let i=1;i<=10;i++){
// eval(`mye${i} = ${i}+2`)
// }
// console.log(mye);