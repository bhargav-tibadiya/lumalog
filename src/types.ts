export type sayHelloProps = {
  firstName: string;
  lastName?: string;
  age?: number;
}

export interface logConfig {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export type logGroupProps = {
  title: string;
  items: string[];
};