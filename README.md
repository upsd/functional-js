# Functional JavaScript
This repo is to demonstrate how you can write JavaScript in a more functional way, utilising some of the built-in functionality found in the latest versions of ECMAScript. We are only scratching the surface of what is possible, but it might make you think about writing your JavaScript (and any other language) differently.

## Examples
I hope people find the below examples here both useful and interesting.

### Example 1: Double each item of an array

Traditional:
```
function doubleEachItem(array) {
    let newArray = [];    
    array.forEach(function(i) {
        newArray.push(i * 2);
    });
    return newArray;
}
```

Functional:
```
function doubleEachItem(array) {
    return array.map((i) => i * 2);
}
```

### Example 2: Sum all items in an array 

Traditional:
```
function sumAllItems(array) {
    let counter = 0;
    array.forEach(function(i) {
        counter += i;
    });
    return counter;
}
```

Functional:
```
function sumAllItems(array) {
    return array.reduce(
        (acc, val) => acc + val
    );
}
```

### Example 3: Filter a dataset (in this case: All Males living in London)

Dataset:
```
let people = [
    {
        name: "John",
        gender: "male",
        location: "London"
    },
    {
        name: "Sandra",
        gender: "female",
        location: "London"
    },
    {
        name: "Philippa",
        gender: "female",
        location: "Glasgow"
    },
    {
        name: "Roger",
        gender: "male",
        location: "Berlin"
    },
    {
        name: "Steve",
        gender: "male",
        location: "London"
    },
    {
        name: "Doris",
        gender: "female",
        location: "Yorkshire"
    }
];
```

Traditional:
```
function findAllMalesLivingInLondon(people) {
    let array = [];
    people.forEach(function(p) {
        if (p.gender == "male" && p.location == "London") {
            array.push(p);
        }
    });
    return array;
}
```

Functional:
```
function findAllMalesLivingInLondon(people) {
    return people
        .filter((p) => p.gender == "male")
        .filter((p) => p.location == "London");
}
```
N.B. For readability, I have these as separate filters, I am perfectly aware it could be achieved in a single filter.

### Example 4: Reduce a dataset (in this case: How many Students who attend Oxford school and take Geography)

Dataset:
```
let students = [
    {
        classes: ["GEOG", "MATHS", "PHYSICS"],
        school: "OXFORD"
    },
    {
        classes: ["IT", "FRENCH", "PHYSICS"],
        school: "BASINGSTOKE"
    },
    {
        classes: ["GEOG", "MATHS", "SPORT"],
        school: "OXFORD"
    },
    {
        classes: ["GEOG"],
        school: "OXFORD"
    },
    {
        classes: ["MATHS", "PHYSICS"],
        school: "WORCESTER"
    },
    {
        classes: ["GEOG", "MATHS"],
        school: "LONDON"
    },
    {
        classes: ["GEOG", "ITALIAN"],
        school: "OXFORD"
    }
];
```

Traditional:
```
function findNumberOfOxfordStudentsWhoTakeGeography(students) {
    let counter = 0;
    students.forEach(function(s) {
        if (s.school == "OXFORD" && s.classes.indexOf("GEOG") != -1) {
            counter += 1;
        }
    });
    return counter;
}
```
N.B. `s.classes.indexOf("GEOG") != -1` could have been switched out for `s.classes.includes("GEOG")` as seen in the below code snippet.

Functional:
```
function findNumberOfOxfordStudentsWhoTakeGeography(students) {
    return students
        .filter((s) => s.school == "OXFORD")
        .filter((s) => s.classes.includes("GEOG"))
        .length;    
}
```
N.B. For readability, I have these as separate filters, I am perfectly aware it could be achieved in a single filter.

## Run tests
Open up `test-runner.html` in your web browser.