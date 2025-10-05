/*--------------------------------------------------*/
//NAME:           Joseph Schneider
//FILE:           main.ts
//CLASS:          CICS-220 Programming Methodology
//ASSIGNMENT:     Oracles 4a
//PROFESSOR:      Marius Minea
//DATE STARTED:   10/07/2024
//DATE COMPLETED: 10/09/2024
//DATE DUE:       10/09/2024
/*--------------------------------------------------*/
import { FLAWED_STABLE_MATCHING_SOLUTION_1, STABLE_MATCHING_SOLUTION_1 } from "../include/stableMatching.js";
import { generateInput, stableMatchingOracle } from "./oracles.js";

function debugPrint(prefix: string, x: unknown): void {
  console.log(`${prefix} ${JSON.stringify(x, undefined, 2)}`);
}

function printArray(arr: number[][]) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
}
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
