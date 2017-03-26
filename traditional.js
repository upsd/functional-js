function normalDoubleEachItem(array) {
    let newArray = [];    
    array.forEach(function(i) {
        newArray.push(i * 2);
    });
    return newArray;
}

function normalSumAllItems(array) {
    let counter = 0;
    array.forEach(function(i) {
        counter += i;
    });
    return counter;
}

function normalFindAllMalesLivingInLondon(people) {
    let array = [];
    people.forEach(function(p) {
        if (p.gender == "male" && p.location == "London") {
            array.push(p);
        }
    });
    return array;
}

function normalFindNumberOfOxfordStudentsWhoTakeGeography(students) {
    let counter = 0;
    students.forEach(function(s) {
        if (s.school == "OXFORD" && s.classes.indexOf("GEOG") != -1) {
            counter += 1;
        }
    });
    return counter;
}