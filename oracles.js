/*--------------------------------------------------*/
//NAME:           Joseph Schneider
//FILE:           oracles.ts
//CLASS:          CICS-220 Programming Methodology
//ASSIGNMENT:     Oracles 4a
//PROFESSOR:      Marius Minea
//DATE STARTED:   10/07/2024
//DATE COMPLETED: 10/09/2024
//DATE DUE:       10/09/2024
/*--------------------------------------------------*/
import assert from "assert";
export function generateInput(n) {
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function randomizeArr(arr) {
        for (let i = arr.length - 1; i > 0; --i) {
            const j = randomInt(0, i);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function createArrRandom(n) {
        const arr = [];
        for (let i = 0; i <= n - 1; ++i) {
            arr.push(i);
        }
        return randomizeArr(arr);
    }
    function createArrOfRandomArr(n) {
        const arrOfArr = [];
        for (let i = 0; i <= n - 1; ++i) {
            arrOfArr.push(createArrRandom(n));
        }
        return arrOfArr;
    }
    return createArrOfRandomArr(n);
}
const NUM_TESTS = 50; //20 Change this to some reasonably large value
const N = 15; //6 Change this to some reasonable size
/**
 * Tests whether or not the supplied function is a solution to the stable matching problem.
 * @param makeStableMatching A possible solution to the stable matching problem
 * @throws An `AssertionError` if `makeStableMatching` is not a solution to the stable matching problem
 */
export function stableMatchingOracle(makeStableMatching) {
    for (let i = 0; i < NUM_TESTS; ++i) {
        const companies = generateInput(N);
        const candidates = generateInput(N);
        const hires = makeStableMatching(companies, candidates);
        assert(companies.length === hires.length, "Hires length is correct.");
        //Need to make sure that no employee is hired twice
        //make sure match i !== match j
        //Need to make sure that the matches are stable
        //need to compare each object of the array with each other object of the array
        //need to make inverse function
        function retInverse(arr) {
            const tmp = new Array(arr.length);
            for (let idx = 0; idx < arr.length; ++idx) {
                tmp[arr[idx]] = idx;
            }
            return tmp;
        }
        //inverse arrays of each company pref
        const companiesInverse = companies.map(retInverse);
        //inverse arrays of each candidate pref
        const candidatesInverse = candidates.map(retInverse);
        //goes through list of hires
        for (let i = 0; i < hires.length; ++i) {
            for (let j = i + 1; j < hires.length; ++j) {
                //hires[i] = 1
                //hires[j] = 2
                //a1 prefers b2 over b1 & b2 prefers a1 over a2
                //or a2 prefers b1 over b2 & b1 prefers a2 over a1
                //a = candidate
                //b = company
                const { candidate: a1, company: b1 } = hires[i];
                const { candidate: a2, company: b2 } = hires[j];
                const a1PrefOfB1 = candidatesInverse[a1][b1];
                const a1PrefOfB2 = candidatesInverse[a1][b2];
                const a2PrefOfB1 = candidatesInverse[a2][b1];
                const a2PrefOfB2 = candidatesInverse[a2][b2];
                const b1PrefOfA1 = companiesInverse[b1][a1];
                const b1PrefOfA2 = companiesInverse[b1][a2];
                const b2PrefOfA1 = companiesInverse[b2][a1];
                const b2PrefOfA2 = companiesInverse[b2][a2];
                //a1PrefOfB2 < a1PrefOfB1 &&    a1 prefers b2 over b1 &&
                //b2PrefOfA1 < b2PrefOfA2)      b2 prefers a1 over a2
                //||
                //a2PrefOfB1 < a2PrefOfB2 &&    a2 prefers b1 over b2 &&
                //b1PrefOfA2 < b1PrefOfA1       b1 prefers a2 over a1
                assert(a1 !== a2, "candidate should not be paired twice");
                assert(b1 !== b2, "company should not be paired twice");
                assert(!((a1PrefOfB2 <= a1PrefOfB1 && b2PrefOfA1 <= b2PrefOfA2) ||
                    (a2PrefOfB1 <= a2PrefOfB2 && b1PrefOfA2 <= b1PrefOfA1)), "Matching should be stable");
            }
        }
    }
}
// Part B
/**
 * Tests whether or not the supplied function follows the supplied algorithm.
 * @param makeStableMatchingTrace A possible solution to the stable matching problem and its possible steps
 * @throws An `AssertionError` if `makeStableMatchingTrace` does not follow the specified algorithm, or its steps (trace)
 * do not match with the result (out).
 */
export function stableMatchingRunOracle(makeStableMatchingTrace) {
    for (let i = 0; i < NUM_TESTS; ++i) {
        const companies = generateInput(N);
        const candidates = generateInput(N);
        const { trace, out } = makeStableMatchingTrace(companies, candidates);
        // This statement is here to prevent linter warnings about `trace` and `out` not being used.
        // Remove it as necessary.
        console.log(trace, out);
        // TODO: Assertions go here
    }
}
//# sourceMappingURL=oracles.js.map