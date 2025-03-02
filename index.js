//  example document
{
  "gender": "female",
  "eyeColor": "green",
  "favoriteFruit": "banana",
  "_id": {
    "$oid": "67bcbb49f68c200b7719296a"
  },
  "index": 0,
  "name": "Aurelia Gonzales",
  "isActive": false,
  "registered": {
    "$date": "2015-02-11T04:22:39.000Z"
  },
  "tags": [
    "enim",
    "id",
    "velit",
    "ad",
    "consequat"
  ],
  "age": 20,
  "company": {
    "title": "YURTURE",
    "email": "aureliagonzales@yurture.com",
    "phone": "+1 (940) 501-3963",
    "location": {
      "address": "694 Hewes Street",
      "country": "USA"
    }
  }
}

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

// ---- find total number of males and females 
// [
//   {
//     $group: {
//       _id: "$gender",
//       genderCount : {
//         $sum : 1
//       }
//     }
//   },
// ]

// --- which country has the heights number of registed users 
// [
//   {
//     $group: {
//       _id : "$company.location.country",
//       countryCount : {
//         $sum :1
//       }
//     }
//   },
//   {
//     $sort: {
//       countryCount :-1
//     }
//   },
//   {
//     $limit:2
//   }
// ]

//  list all unique eye color
// [
//   {
//     $group: {
//       _id: "$eyeColor",
//     }
//   }
// ]

// what is the average number of tags per user
// [
//   {
//     $unwind: {
//       path: "$tags",
//     }
//   },
//   {
//     $group:{
//       _id :"$_id",
//       numberOfTags : {
//         $sum :1
//       }
//     }
//   },
//   {
//     $group: {
//       _id: null,
//      averageNumberOfTags :{ $avg : "$numberOfTags" }
//     }
//   }
// ]

// ---- another way
// [
//   {
//     $addFields: {
//       numberOfTags: {
//         $size : { $ifNull : ["$tags", []] }
//       },
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       averageNumberOfTags : {
//         $avg : "$numberOfTags"
//       }
//     }
//   }
// ]

// How many users have 'enim' as one of their tags or any tag

// [
//   {
//     $match: {
//     	tags: "enim"
//     }
//   },
//   {
//     $count : "userWithEnimTag"
//   }
// ]

// what are the names and age of users who are inactive and have 'velit' as a tag?

// [
//   {
//     $match: {
//       isActive: false,
//       tags: "velit",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       age: 1,
//     },
//   },
// ]

// how many users have a phone number starting with '+1 (940)' ?

// [
//   {
//     $match: {
//       "company.phone": /\+1\s?\(940\)/
//     }
//   },
//   {
//     $count: 'userWithSpecialPhone'
// 	},
// ]

// who has registered most recently?

// [
//   {
//     $sort: {
//       registered: -1
//     }
//   },
//   { $limit: 5 } ,
//   {
//     $project: {
//       name:1,
//       registered:1,
//       favoriteFruit:1,
//     }
//   }
// ]

// categorize users by their favorite fruit

// [
//   {
//     $group : {
//       _id : "$favoriteFruit",
//       users : { $push : "$name" }
//     }
//   }
// ]
