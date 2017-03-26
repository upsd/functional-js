var assert = chai.assert;

describe("Functional JavaScript Tests", function() {
    it("should double each element of array", function() {
        let array = [1,2,3,4];
        let normal = normalDoubleEachItem(array); 
        let functional = functionalDoubleEachItem(array); 

        assert.deepEqual(normal, functional);
    });

    it("should sum all elements of array", function() {
        let array = [1,2,3,4];
        let normal = normalSumAllItems(array); 
        let functional = functionalSumAllItems(array); 

        assert.deepEqual(normal, functional);
    });

    it("should find all males living in london", function() {
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

        let normal = normalFindAllMalesLivingInLondon(people);
        let functional = functionalFindAllMalesLivingInLondon(people);
        
        assert.lengthOf(normal, 2);
        assert.lengthOf(functional, 2);        
    });

    it ("should find the number of students who take geography and attend a school in Oxford", function() {
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

        let normal = normalFindNumberOfOxfordStudentsWhoTakeGeography(students);
        let functional = functionalFindNumberOfOxfordStudentsWhoTakeGeography(students);

        assert.equal(normal, 4);
        assert.equal(functional, 4);
    });
});