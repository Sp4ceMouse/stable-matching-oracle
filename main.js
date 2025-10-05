function debugPrint(prefix, x) {
    console.log(`${prefix} ${JSON.stringify(x, undefined, 2)}`);
}
function printArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
}
export {};
/*
const N = 10;
const companies = generateInput(N);
debugPrint("Companies:", companies);
const candidates = generateInput(N);
debugPrint("Candidates:", candidates);

const solution = STABLE_MATCHING_SOLUTION_1(companies, candidates);
//debugPrint("Correct Solution:", solution);

const incorrect = FLAWED_STABLE_MATCHING_SOLUTION_1(companies, candidates);
//debugPrint("Incorrect Solution:", incorrect);
console.log(stableMatchingOracle(STABLE_MATCHING_SOLUTION_1));
*/
//# sourceMappingURL=main.js.map