//Mutable
// const updateAge = (userInfo) => {
//   userInfo.age = userInfo.age + 1
//   return userInfo
// }

//Inmutable: Object.assign
// const updateAge = (userInfo) => {
//   return Object.assign({}, userInfo, { age: userInfo.age + 1 })
// }

//Inmutable: Spread Operator
const updateAge = (userInfo) => {
  return {
    ...userInfo,
    age: userInfo.age + 1,
  };
}

const userInfo = {
  name: 'Miguel',
  age: 22,
  email: 'miguel@platzi.com'
}

console.log('userInfo BEFORE: ', userInfo);

const updateUserInfo = updateAge(userInfo);

console.log('userInfo AFTER: ', userInfo);
console.log('updatedInfo: ', updateUserInfo);