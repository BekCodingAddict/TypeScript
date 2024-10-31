"use strict";
var _a;
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weigth) {
    if (typeof weigth === "number")
        return weigth * 2.2;
    else
        return parseInt(weigth) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { brithday: new Date() };
}
let customer = getCustomer(12);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.brithday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map