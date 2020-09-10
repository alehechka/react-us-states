# react-us-states

React Hooks module for the [states-us](https://www.npmjs.com/package/states-us) package.

[![npm version](https://img.shields.io/npm/v/react-us-states.svg?style=flat-square)](https://www.npmjs.com/package/react-us-states)
[![npm-publish](https://github.com/alehechka/react-us-states/workflows/npm-publish/badge.svg)](https://github.com/alehechka/react-us-states/actions)
[![npm downloads](https://img.shields.io/npm/dm/react-us-states.svg?style=flat-square)](https://www.npmjs.com/package/react-us-states)

## Installation

To install react-ntc with `npm`:

    npm install react-us-states

To install react-ntc with `yarn`:

    yarn add react-us-states

# Types

```ts
interface StateObject {
	name: string;
  abbreviation: string;
  territory: boolean;
  contiguous: boolean;
}

interface StateMap {
	[abbreviation: string]: string;
}

interface FullStateMap {
  [abbreviation: string]: StateObject;
}

type StateTuple = [
  name: string,
  abbreviation: string,
  territory: boolean,
  contiguous: boolean
];
```

# Hooks

```ts
useStates()

useStateMap()

useFullStateMap()

useStateTuples()

useStateNameLookup(abbreviation: string)

useStateObjectLookup(abbreviation: string)
```

# Demo

View demo here: [https://alehechka.github.io/react-us-states/](https://alehechka.github.io/react-us-states/)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
