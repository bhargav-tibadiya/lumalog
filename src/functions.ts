import { sayHelloProps } from "./types";

export const sayHello = ({ firstName, lastName, age }: sayHelloProps) => {

  console.log('------------------------------');
  console.log("Welcome To The Candy Logs");
  console.log('------------------------------');
  console.log('\n');
  console.log("Hello ", firstName, ' ', lastName, "\n");
  console.log('\n');
  console.log("You are", age, " year Old", "\n");
  console.log('\n');
  console.log('------------------------------');

}