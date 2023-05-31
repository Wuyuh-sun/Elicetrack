const obj = {
  name: "name",
  age: "age",
  sex: "M",
};

const { ...rest } = obj;

console.log(rest);
