let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, query){
    const searchName = element => element.toLowerCase() === query.toLowerCase() ? true : false
    return array.filter(searchName, query)
}

drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function fuzzyMatch(array, query){
    const searchLetter = element => element.slice(0, query.length).toLowerCase() === query.toLowerCase() ? true : false
    return array.filter(searchLetter, query)
}


drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function matchName(array, query){
    const searchObj = element => element.name === query ? true : false 
    return array.filter(searchObj, query)
}



//   function findMatching(array, query){

//     result = array.filter(function(element){
//         const name = element.name
//         if (name.toLowerCase() === query.toLowerCase()){
//             return true
//         } else {
//             return false
//         }
//     }, query)
//     console.log(result)  
// }
  

// //   function driverName (obj, searchName){
// //     console.log(obj)
// //     console.log(searchName)
// //     // return stringName.toLowerCase() === name.toLowerCase() ? true : false 
// //   }

// // function searchName (obj, query){


// // }

//   findMatching(drivers, "Bobby")