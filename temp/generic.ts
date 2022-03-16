// 1. create a new type which is an array of numbers

type numArray = Array<number>;
// or

type numArray2 = number[];

// 2. make the above an array of strings

type stringArray = Array<string>;

// 3. make a function called "last" which takes an array of numbers as parameter and which returns an array with the last item of this array

const last = (arr: Array<number>): number => {
  return arr[arr.length - 1];
};

// 4. call the "last" function with an array of 3 numbers and assign it to a constant "ln"
let ln = last([1, 2, 5]);

// 5. do the same wih an array of 3 strings assignint the return value to a constant "ls"
let ls = last(["1", "2", "5"]);

// You will notice a type error Type 'string' is not assignable to type 'number'.ts(2322)

// Your function "lastT" should work with any type of array
// 6. make your function accepting an Array of T and returning T

const lastT = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

// call step 4 and 5 on the new function

const lnt = lastT([1, 2, 3]);
const lst = lastT(["a", "b", "c"]);

// 7. make a non generic version of a function called "makeArr" accepting a parameter x which is a number and returns an array of that parameter

const makeArr = (x: number): Array<number> => {
  return [x];
};

// 8. call this function with the number 5 and store the return value in a const v

const v = makeArr(5);

// 9. call this function with the string "a"

const vv = makeArr("a");
