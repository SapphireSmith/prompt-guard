"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countTokens = countTokens;
exports.isWithinBudget = isWithinBudget;
function countTokens(input) {
    const cleaned = input.trim().replace(/\s+/g, " ");
    return Math.ceil(cleaned.length / 4);
}
function isWithinBudget(input, limit) {
    return countTokens(input) <= limit;
}
