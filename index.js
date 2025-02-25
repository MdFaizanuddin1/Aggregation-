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

// list five find most common fruits
// [
//   {
//     $group: {
//       _id: "$favoriteFruit",
//       count:{
//         $sum :1
//       }
//     }
//   },
//   {
//     $sort: {
//       count : -1
//     }
//   },
//   {
//     $limit:2
//   }
// ]
