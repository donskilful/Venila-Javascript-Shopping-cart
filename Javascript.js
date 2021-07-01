// // An array of objects
// var socialMedia = [
//   { facebook: "Harry" },
//   { instagram: "Alice" },
//   { linkedin: "Peter" },
// ];

// if (Array.isArray(socialMedia)) {
//   console.log("This is an Array");
//   // Find if the array contains an object by comparing the property value
//   if (socialMedia.some((media) => media.facebook === "Harry")) {
//     console.log("Object found inside the array.");
//   } else {
//     console.log("Object not found.");
//   }
// } else {
//   console.log("Cannot perform this operation on a non Array");
// }



//  /* Declare an array */
//         var arr = ["geeks1", "geeks2", "geeks3",
//                 {"geeks1":10, "geeks2":12}];
                  
//         var num = arr.find( 
//             value => { return typeof value == "object" } );
              
//         console.log("Object found");




// An array of objects
var socialMedia = [
  { facebook: "Harry" },
  { instagram: "Alice" },
  { linkedin: "Peter" },
  9,
  90
];

if (Array.isArray(socialMedia)) {
  console.log("This is an Array");
  if (socialMedia.find(value => typeof value == "object")) {
    console.log("Object found inside the array.");
    const val = [...socialMedia.find((value) => typeof value == "object")];
    console.log(val);

  } else {
    console.log("Object not found.");
  }
} else {
  console.log("Cannot perform this operation on a non Array");
}
