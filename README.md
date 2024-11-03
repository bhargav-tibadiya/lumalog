# LumaLog

**LumaLog** is a simple and customizable logging utility that enhances the console output with structured and personalized messages. Whether for debugging or adding a touch of style to your console logs, LumaLog makes it easy to display friendly messages in a consistent format.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
- [API Reference](#api-reference)
  - [sayHello Function](#sayhello-function)
  - [slog Function](#slog-function)
  - [setStyles Function](#setstyles-function)
  - [glog Function](#glog-function)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install LumaLog, simply run:

```bash
npm install lumalog
```

or, if using Yarn:

```bash
yarn add lumalog
```

## Usage

### Basic Example

After installing, you can import functions from the `lumalog` package and start using them in your project:

```typescript
import { sayHello, slog, setStyles, glog } from 'lumalog';

sayHello({
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
});

setStyles({
  color: 'blue',
  fontSize: '14px',
  fontWeight: 'bold'
});

slog("This is a styled message!");

glog({
  title: "Tasks for Today",
  items: ["Check emails", "Review PRs", "Plan feature roadmap"]
});
```

### Console Output
The `sayHello` function will produce a structured output in the console, such as:

```
------------------------------
Welcome To The LumaLog
------------------------------

Hello Jane Doe

You are 25 years old

------------------------------
```

The `glog` function will produce output grouped under a title:

```
Tasks for Today
  1. Check emails
  2. Review PRs
  3. Plan feature roadmap
```

## API Reference

- **`sayHello(props: sayHelloProps): void`**: Outputs a formatted greeting message to the console.
- **`slog(message: string): void`**: Prints a styled message to the console using the current style configuration.
- **`setStyles(config: LogStyleConfig): void`**: Updates the default styling for all future `slog` messages.
- **`glog({ title, items }: LogGroupProps): void`**: Logs a group of messages under a title, where `items` is an array of strings.

## Types

### LogStyleConfig

| Property   | Type     | Default  | Description                 |
|------------|----------|----------|-----------------------------|
| `color`      | string   | `black` | Text color for the log     
| `fontSize`   | string   | `12px`  | Font size of the log text  
| `fontWeight` | string   | `500`   | Font weight of the log text

### LogGroupProps

| Property | Type     | Description                               |
|----------|----------|-------------------------------------------|
| `title`  | string   | The title under which to group messages   |
| `items`  | string[] | The array of messages to log under `title`|

## Contributing

Contributions to LumaLog are welcome! If you'd like to improve the package, feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/bhargav-tibadiya/lumalog).

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

LumaLog is licensed under the MIT License.
