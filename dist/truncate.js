"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateToFit = truncateToFit;
const tokens_1 = require("./tokens");
function truncateToFit(input, maxTokens) {
    let text = input;
    while ((0, tokens_1.estimateTokens)(text) > maxTokens) {
        text = text.slice(0, -1);
    }
    return text;
}
