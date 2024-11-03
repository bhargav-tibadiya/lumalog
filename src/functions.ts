import { logConfig, logGroupProps, sayHelloProps } from "./types";

// Default styles
let defaultStyles: logConfig = {
  color: 'black',
  fontSize: '12px',
  fontWeight: '500'
}

// Say hello function
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

// Set styles function to update defaultStyles
export const setStyles = (config: logConfig) => {
  defaultStyles = { ...defaultStyles, ...config };
};

// Styled log function
export const slog = (message: string) => {
  const styleString = `color: ${defaultStyles.color}; font-size: ${defaultStyles.fontSize}; font-weight: ${defaultStyles.fontWeight};`;
  console.log(`%c${message}`, styleString);
};


export const glog = ({ title, items }: logGroupProps) => {
  console.group(title); 

  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });

  console.groupEnd(); 
};