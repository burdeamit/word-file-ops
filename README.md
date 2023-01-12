## Description

## Word File Ops

A NestJS App to read a txt file and calculate the statistics of the words in the file.

## Installation

```bash
$ npm install
```

## Problem Statement

Please create a REST api as http://localhost:3000/words and the response like above.
Read the words.txt file show the count of words which are length less than seven in count property and those words display in words list.

## Solution Approach

- Read the file using the fs module
- Split the file into words using the split method
- Calculate the total characters and words in the file
- Filter the words with length less than 7
- Filter the words with length less than 7

### Statistics Calculated

- Total number of words in the file
- Total number of characters in the file
- List of Words with length less than 7
- List of Words with length greater than 7

## Sample Text File Words

- pollution
- feeable
- vocoders
- calamitoid
- lycoperdoid
- grappa
- ruralisms
- phosphagen
- unmasquerade
- flatlander
- blateroon
- islandress
- pigtailed
- goric
- microtubule

## Expected Output

```json
{
  "All Words": [
    "pollution",
    "feeable",
    "vocoders",
    "calamitoid",
    "lycoperdoid",
    "grappa",
    "ruralisms",
    "phosphagen",
    "unmasquerade",
    "flatlander",
    "blateroon",
    "islandress",
    "pigtailed",
    "goric",
    "microtubule"
  ],
  "Total Characters Count": 136,
  "Total Words Count": 15,
  "Words With More Than Seven Characters": [
    "pollution",
    "vocoders",
    "calamitoid",
    "lycoperdoid",
    "ruralisms",
    "phosphagen",
    "unmasquerade",
    "flatlander",
    "blateroon",
    "islandress",
    "pigtailed",
    "microtubule"
  ],
  "Words With Less Than or With Seven Characters": [
    "feeable",
    "grappa",
    "goric"
  ]
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

- http://localhost:3000/words
