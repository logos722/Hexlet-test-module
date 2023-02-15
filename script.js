// const usersTest = [
//   { name: 'Igor', age: 19 },
//   { name: 'Danil', age: 1 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const students = [
//   { name: 'Tirion', class: 'B', mark: 3 },
//   { name: 'Keit', class: 'A', mark: 3 },
//   { name: 'Ramsey', class: 'A', mark: 4 },
// ];

// const users = [
//   {
//     name: 'Tirion',
//     friends: [
//       { name: 'Mira', gender: 'female' },
//       { name: 'Ramsey', gender: 'male' },
//     ],
//   },
//   { name: 'Bronn', friends: [] },
//   {
//     name: 'Sam',
//     friends: [
//       { name: 'Aria', gender: 'female' },
//       { name: 'Keit', gender: 'female' },
//     ],
//   },
//   {
//     name: 'Rob',
//     friends: [
//       { name: 'Taywin', gender: 'male' },
//     ],
//   },
// ];

// const getChildren = (perentName) => {
//   const children = perentName.map((children) => children.children)
//   return children.flat()
// };

// const getGirlFriends = (users) => {
//   const sortedGirls = users.map((users) => users.friends)
//   const redactSortedGirls = sortedGirls.flat()
//   return redactSortedGirls.filter((female) => female.gender === 'female')
// }

// const groupBy = (student, mark) => {
//   const cb = (acc, user) => {
//     if (!Object.hasOwn(acc, user[mark])) {
//       acc[user[mark]] = [];
//     }
//     acc[user[mark]].push(user);
    
//     return acc;
//   }

//   const usersByMark = student.reduce(cb, {});
//   return usersByMark;
// };

// const filteredUsers = usersTest.filter((user) => user.age > 10);
// console.log(groupBy(students, 'mark'))