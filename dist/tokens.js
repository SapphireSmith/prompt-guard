"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateTokens = estimateTokens;
function estimateTokens(input) {
    const cleaned = input.trim().replace(/\s+/g, " ");
    return Math.ceil(cleaned.length / 4);
}
