const translate  = require("./index")
describe("translate function", () => {
// word starting with a
// word starting with e
// word starting with i
// word starting with o
// word starting with u
// word starting with b
// word starting with t
// word "break"
// word "screen"
// word "Apple"

test("word to lowercase", () => {
    let result = translate("Apple");
    expect(result).toEqual("appleway");
    });

test("word starting with a", () => {
     let result = translate("angle");
    expect(result).toEqual("angleway");
    });

test("word starting with e", () => {
    let result = translate("eagle");
    expect(result).toEqual("eagleway");
    });

test("word starting with i", () => {
    let result = translate("igloo");
    expect(result).toEqual("iglooway");
    });

test("word starting with o", () => {
    let result = translate("oats");
    expect(result).toEqual("oatsway");
    });

test("word starting with u", () => {
    let result = translate("under");
    expect(result).toEqual("underway");
    });

test("word starting with b", () => {
    let result = translate("banana");
    expect(result).toEqual("ananabay");
    });

test("word starting with t", () => {
    let result = translate("tree");
    expect(result).toEqual("eetray");
    });


test("word starting with two consonants", () => {
    let result = translate("break");
    expect(result).toEqual("eakbray");
    });

test("word starting with three consonants", () => {
    let result = translate("screen");
    expect(result).toEqual("eenscray");
    });

});