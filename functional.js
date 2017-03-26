function functionalDoubleEachItem(array) {
    return array.map((i) => i * 2);
}

function functionalSumAllItems(array) {
    return array.reduce(
        (acc, val) => acc + val
    );
}

function functionalFindAllMalesLivingInLondon(people) {
    return people
        .filter((p) => p.gender == "male")
        .filter((p) => p.location == "London");
}

function functionalFindNumberOfOxfordStudentsWhoTakeGeography(students) {
    return students
        .filter((s) => s.school == "OXFORD")
        .filter((s) => s.classes.includes("GEOG"))
        .length;    
}