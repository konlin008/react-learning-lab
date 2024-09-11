// fat arrow function
const ab = () => {
  return "Hi! I'm Fat Arrow";
};

// fat arrow function with One Perameter:
const abc = (val) => {
  return `Hi! I'm Fat Arrow, ${val}`;
};

// fat arrow function with One Perameter & implicit return

const abcd = () => "Hi! I'm Fat Arrow with implicit return,";
console.log(ab());
console.log(abc("with One Perameter"));
console.log(abcd());

const obj= ()=>({name:"Aman",age:22})