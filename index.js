//    ---- find how many users are active
// [
//   {
//     $match: {
//       isActive:true
//     }
//   },
//   {
//     $count: 'Number of active users'
//   }
// ]

// --- what is the average age of users 
// [
//   {
//     $group: {
//       _id: null,
//       averageAge:{
//         $avg : "$age"
//       }
//     }
//   }
// ]
