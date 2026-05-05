"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = sanitize;
const patterns = [
    /ignore\s+previous\s+instructions/i,
    /disregard\s+all\s+prior/i
];
function sanitize(input) {
    let flagged = false;
    let output = input;
    for (const pattern of patterns) {
        if (pattern.test(output)) {
            flagged = true;
            output = output.replace(pattern, "");
        }
    }
    return { output: output.trim(), flagged };
}
