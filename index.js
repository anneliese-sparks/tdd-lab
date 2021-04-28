function translate (string) {
    string = string.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;

    if (vowels.includes(string[0])) {
        return string + "way";
    }
    else {
        for (let char of string) {
            if (vowels.includes(char)) {
                vowelIndex = string.indexOf(char);
                break;
            }
        }
        return string.slice(vowelIndex) + string.slice(0, vowelIndex) + "ay";
    }
}



module.exports = translate;