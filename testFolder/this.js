// const cat = {
//   name: "meow",
//   foo1: function () {
//     const foo2 = function() {
//         console.log(this.name);
//       };
//     foo2();
//   },
// };

// cat.foo1(); // undefined

// const cat = {
//   name: "meow",
//   foo1: function () {
//     const foo2 = {
//       name : "meme",
//       func: function() {
//         console.log(this.name);
//       },
//     };
//     foo2.func();
//   },
// };

// cat.foo1(); // meme

// const cat = {
//   name: "meow",
//   foo1: function () {
//     const foo2 = () => {
//         console.log(this.name);
//       };
//     foo2();
//   },
// };

// cat.foo1(); // meow

const cat = {
  name: "meow",
  foo1: function () {
    const foo2 = {
      name: "meme",
      func: () => {
        console.log(this.name);
      },
    };
    foo2.func();
  },
};

cat.foo1(); // meow
