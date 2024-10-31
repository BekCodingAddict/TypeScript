// console.log("Hello World");

// let age: number = 20;
// if (age < 10) {
//   age += 50;
// }

// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level; // any
// console.log(sales);

// let numbers: number = [1, 2, 3];
// let numbers2: number[] = []; // Empty Array Declarations
// let user: [number, string] = [1, "Mosh"]; // fixed arrayt declaration
// user.push("Hello");
// user; //

// // enums
// const small = 1;
// const medium = 2;
// const large = 3;
// //pascalCase
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize); //2

//functions
// function canculateTax(income: number, taxyear: number = 2022): number {
//   if (income < 50_000 || (taxyear || 2022) < 2022) return income * 1.2;

//   return income * 1.3;
// }

// console.log(canculateTax(20));

// Objects
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// let date: Date = new Date();
// console.log(employee.retire(date));

// Advanced types
//type alies
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: {} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types
function kgToLbs(weigth: number | string): number {
  //Narrowing
  if (typeof weigth === "number") return weigth * 2.2;
  else return parseInt(weigth) * 2.2;
}

// intersection types
// let weigth: number & string;

type Draggable = {
  drag: () => void;
};

type Resize = {
  resize: () => void;
};

type UIWidget = Draggable & Resize;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal types
type QUantity = 50 | 100;
let quantity: QUantity = 100;

type Metric = "cm" | "inch";

//nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}
greet(null);

// optrinal chanining
type Customer = {
  brithday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { brithday: new Date() };
}

let customer = getCustomer(12);
console.log(customer?.brithday?.getFullYear());
// customer?.[0]

let log: any = (message: string) => console.log(message);
log?.("a");
