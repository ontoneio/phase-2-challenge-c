# Phase 2 Interview Challenge

This is the challenge for getting into phase 2.

To get started, create a new repository called `phase-2-challenge-c`. Do all of your work in this repo and submit it as your solution.

Skills covered:

- Programming
- Programming in JS
- Testing
- Node.js
- HTML & CSS
- Terminal, Bash, & UNIX

Each requirement has a point value. A fully complete requirement gets full points; partially complete requirements get partial points; incomplete requirements get no points. Completeness is determined by calculating points earned divided by total points available.

## General Requirements

- [x] __10:__ Solution is in a public GitHub repository called `phase-2-challenge-c`.
- [x] __10:__ Solution repository has 4 folders: `part-1`, `part-2`, and `part-3`, and `part-4`.
- [x] __20:__ Git history shows frequent commits.

## Part 1: Write tests and solutions for these functions

For the following exercises, write your functions in a file called `part-1/functions.js` and your tests in a file called `part-1/tests.js`.

You can use whichever testing tools you prefer: `console.assert()` (builtin to Node), Mocha and Chai, Jasmine, etc.

### Show the day of the week

Write a function `weekday(date)` to find the day of the week for a given `Date` object, returing the weekday as a string ('Sunday', 'Monday', 'Tuesday', etc.).

Example:

```js
let dateA = new Date(2017, 5, 15) // June 15, 2017
weekday(dateA) // returns "Thursday"

let dateB = new Date(2017, 11, 31) // Dec 31, 2017
weekday(dateB) // returns "Sunday"
```

#### Requirements

- [x] __10:__ A test using expected/valid inputs for the `weekday()` function is written in `tests.js`.
- [x] __10:__ A test using unexpected/invalid inputs for the `weekday()` function is written in `tests.js`.
- [x] __30:__ Correct implementation of the `weekday()` is defined in `functions.js`.
- [x] __10:__ Tests for `weekday()` are passing.

### Capitalize every 4th character

Write a function `capitalizeFourth(string)` that takes a string of words and returns the same string with every 4th character converted to upper case and the rest converted to lower case. Treat whitespace and punctuation characters the same as any other word character.

Example:

```js
capitalizeFourth("Eenie, Meenie, Miney, Moe") // => "eenIe, MeenIe, MineY, mOe"
capitalizeFourth("ABRACADABRA") // => "abrAcadAbra"
```

#### Requirements

- [x] __10:__ A test using expected/valid inputs for the `capitalizeFourth()` function is written in `tests.js`.
- [x] __10:__ A test using unexpected/invalid inputs for the `capitalizeFourth()` function is written in `tests.js`.
- [x] __30:__ Correct implementation of the `capitalizeFourth()` is defined in `functions.js`.
- [x] __10:__ Tests for `capitalizeFourth()` are passing.

### List of values for object

Write a function `getValues(obj)` that returns all the values for an object (i.e. the values for each of its properties). Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

Example:

```js
let person = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

getValues(person) // => ['Dominique', 30, '555-555-5555']
getValues({ ids: [4, 8, 2], success: true }) // => [ [4, 8, 2], true ]
getValues({}) // => []
```

#### Requirements

- [x] __10:__ A test using expected/valid inputs for the `getValues()` function is written in `tests.js`.
- [x] __10:__ A test using unexpected/invalid inputs for the `getValues()` function is written in `tests.js`.
- [x] __30:__ Correct implementation of the `getValues()` is defined in `functions.js`.
- [x] __10:__ Tests for `getValues()` are passing.

### Filter around

Write a function `filterAround(array, lower, upper)` that takes an array of strings, a `lower` value, and a `upper` value. It returns a new array containing _only_ the elements from the source `array` that come before `lower` alphabetically and after `upper`. The elements in the returned array should be in the same order as the source array.

Example:

```js
let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filterAround(animals, 'cow', 'dog') // => ['cat', 'zebra', 'ape', 'lion']
filterAround(animals, 'chimp', 'lobster') // => ['cat', 'zebra', 'ape']
filterAround(animals, 'aardvark', 'zebu') // => []
```

#### Requirements

- [x] __10:__ A test using expected/valid inputs for the `filterAround()` function is written in `tests.js`.
- [x] __10:__ A test using unexpected/invalid inputs for the `filterAround()` function is written in `tests.js`.
- [x] __30:__ Correct implementation of the `filterAround()` is defined in `functions.js`.
- [x] __10:__ Tests for `filterAround()` are passing.

## Part 2: Extract data from JSON file

Write a Node.js script to search for data from a JSON file.

Use the [`cars.json` file provided](https://gist.github.com/lg-bot/3014e0b8badc83994ae674fed4666dd7#file-cars-json) representing a database of cars in a used car lot. Download the file to your `part-2/` folder.

Then write two scripts that can be run using the `node` command.

1. `searchInYears.js` takes one argument (let's call it `yearRange`), finds all the cars from `cars.json` which have a `year` that is within the `yearRange`, and prints the `id`, `make`, `model`, and `year` of each matching car. The year range format should follow the format `YYYY-YYYY`, e.g. `1995-2001`.
1. `searchByModel.js` takes one argument (let's call it the `model`), finds all the cars from `cars.json` who have a `model` value that _exactly matches_ the `model` argument, and prints the `id`, `model`, `year`, `last_owner`, and `date_purchased` of each matching car.

Your searches should not be case-sensitive: i.e. a search for "sorento" is the same as a search for "Sorento".

Example: `searchInYears.js`

```shell
$ node searchInYears.js 1999-2000
Finding cars from 1999 to 2000...

[ { id: 21, make: 'Toyota', model: 'Land Cruiser', year: 1999 },
  { id: 23, make: 'Ford', model: 'Mustang', year: 1999 },
  { id: 26, make: 'Chevrolet', model: 'Metro', year: 2000 },
  { id: 62, make: 'Chrysler', model: 'Sebring', year: 2000 },
  { id: 79, make: 'Chevrolet', model: 'Impala', year: 2000 },
  { id: 85, make: 'Dodge', model: 'Grand Caravan', year: 1999 },
  { id: 92, make: 'Nissan', model: 'Quest', year: 1999 } ]
```

Example: `searchByModel.js`

```shell
$ node searchByModel.js jetta
Finding cars with model "jetta"...

[ { id: 1,
    model: 'Jetta',
    year: 2011,
    last_owner: 'Kaylil Minico',
    date_purchased: '7/3/2016' },
  { id: 32,
    model: 'Jetta',
    year: 1995,
    last_owner: 'Katerine McEllen',
    date_purchased: '1/8/2004' } ]
```

#### Requirements

- [ ] __40:__ `searchInYears.js` script prints the car  `id`, `make`, `model`, and `year` for all cars with a year inside the year range provided in the script argument. The range is _inclusive_—i.e. include cars with the same year as the start year or the end year of the range, as well as all years in between.
- [ ] __40:__ `searchByModel.js` script prints the car `id`, `model`, `year`, `last_owner`, and `date_purchased` for all cars with a `model` that matches the provided argument (ignoring case).

## Part 3: HTML layout for Bookstore

Write the HTML & CSS to layout a page for an online bookstore.

You only need to write HTML & CSS. No JavaScript or web server is required.

Design a layout to match the following wireframe:

![bookstore](https://user-images.githubusercontent.com/16725399/29139808-2d6ce14e-7d16-11e7-98b9-bb3910fb7aab.png)


### Requirements

- [x] __10:__ All files are stored under the `part-3/` folder
- [x] __20:__ No third party CSS libraries are used (all code must be written from scratch)
- [x] __10:__ HTML and CSS are separated into their own files.
- [x] __20:__ Page has a full-width header with the site title "Bookstore" and a button "Book bag (3)"
- [x] __10:__ Site title "Bookstore" is aligned to the left side of the header
- [x] __10:__ "Book bag (3)" button is aligned to the right side of the header
- [x] __20:__ Page has a "Shelves" sidebar with all shelves for books
- [x] __10:__ Page has a main content area showing each of the books
- [x] __10:__ Main content organizes all books by shelf
- [x] __20:__ Main content lists books' name, author, and a "Buy" button
- [x] __20:__ Clicking on a shelf in the "Shelves" sidebar will jump to that shelf

## Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- What is the PATH environment variable used for in UNIX systems?
- On a UNIX computer, how do you stop a running process?
- Which command can you use to see which homebrew packages you've installed?
- On a UNIX computer, how do you find the process id of a running process?
- In a terminal, what does control-c do?
- What would be the result of typing the following commands?
  ```sh
  $ cd /Users/lucy
  $ mkdir one
  $ touch alpha
  $ cd one
  $ touch alpha
  $ pwd
  ```

- How do you see which environment variables are set in your shell?
- What keyboard shortcut do you use to perform a "Find" search in your editor?
- How do you see which aliases you have in your shell?
- When a terminal command completes, how can you tell if it was successful or not?
- What does your `~/.gitconfig` have in it? (paste the whole file here)
- What is the difference between a relative and absolute path?
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it
- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?

### Requirements

- [x] __50:__ All questions are answered correctly.