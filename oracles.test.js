/*--------------------------------------------------*/
//NAME:           Joseph Schneider
//FILE:           oracles.test.ts
//CLASS:          CICS-220 Programming Methodology
//ASSIGNMENT:     Oracles 4a
//PROFESSOR:      Marius Minea
//DATE STARTED:   10/07/2024
//DATE COMPLETED: 10/09/2024
//DATE DUE:       10/09/2024
/*--------------------------------------------------*/
import { AssertionError } from "assert";
import { FLAWED_STABLE_MATCHING_SOLUTION_1, FLAWED_STABLE_MATCHING_SOLUTION_1_TRACE, STABLE_MATCHING_SOLUTION_1, STABLE_MATCHING_SOLUTION_1_TRACE, } from "../include/stableMatching.js";
import { generateInput, stableMatchingOracle, stableMatchingRunOracle } from "./oracles.js";
describe("generateInput", () => {
    const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    myArr;
    const genArr = generateInput(10);
    function containsAllNumbers(arr, n) {
        const numSet = new Set(arr); // Create a Set from the array for O(1) lookups
        for (let i = 0; i < n; i++) {
            if (!numSet.has(i)) {
                return false; // Return false if any number is missing
            }
        }
        return true; // Return true if all numbers are found
    }
    it("should be of length 10", () => {
        expect(genArr.length).toEqual(10);
    });
    it("should create each sub array of length 10", () => {
        genArr.forEach(e => expect(e.length).toEqual(10));
    });
    it("should contain arrays that all contain values from 0 to n-1", () => {
        genArr.forEach(e => expect(containsAllNumbers(e, 10)).toEqual(true));
    });
});
// Part A
describe("Part A: stableMatchingOracle", () => {
    // You do not need to write more tests. The two provided are sufficient.
    // Given an correct solution, no assertion should fail, and no errors should be thrown
    it("should accept STABLE_MATCHING_SOLUTION_1", () => {
        expect(() => stableMatchingOracle(STABLE_MATCHING_SOLUTION_1)).not.toThrow();
    });
    // Given an incorrect solution, some assertion should fail
    it("should reject FLAWED_STABLE_MATCHING_SOLUTION_1", () => {
        expect(() => stableMatchingOracle(FLAWED_STABLE_MATCHING_SOLUTION_1)).toThrow(AssertionError);
    });
});
// Part B
describe.skip("Part B: stableMatchingRunOracle", () => {
    // You do not need to write more tests than the two provided
    // Given an correct solution, no assertion should fail, and no errors should be thrown
    it("should accept STABLE_MATCHING_SOLUTION_1_TRACE", () => {
        expect(() => stableMatchingRunOracle(STABLE_MATCHING_SOLUTION_1_TRACE)).not.toThrow();
    });
    // Given an incorrect solution, some assertion should fail
    it("should reject FLAWED_STABLE_MATCHING_SOLUTION_1", () => {
        expect(() => stableMatchingRunOracle(FLAWED_STABLE_MATCHING_SOLUTION_1_TRACE)).toThrow(AssertionError);
    });
});
//# sourceMappingURL=oracles.test.js.map