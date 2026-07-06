function toRomanLazy(num) {
	return "";


function toRoman(num) {
	return "";


let romanNumeralToArabic = {
	"V" : 5
}

let romanNumeralPriorityOrder = {
	"M" : 1000,
	"D" : 500,
	"C" : 100,
	"L" : 50,
	"X" : 10,
	"V" : 5,
	"I" : 1
}

// Create a function that takes parameter num
// Take num, and divide it by the arabic (value) of roman numerals
// return the amount of times num can be divided by the value

divide = 0

for (roman in romanNumeralPriorityOrder) {
	if (num >= romanNumeralPriorityOrder[roman]) {
		divide += Math.floor(num / romanNumeralPriorityOrder[roman]);
		num %= romanNumeralPriorityOrder[roman];
	}
}
return divide


}
module.exports = { toRomanLazy, toRoman }
}
