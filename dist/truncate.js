"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateToFit = truncateToFit;
const tokens_1 = require("./tokens");
function truncateToFit(input, options) {
    const { limit, suffix = "..." } = options;
    if ((0, tokens_1.countTokens)(input) <= limit)
        return input;
    const words = input.split(" ");
    let result = "";
    for (const word of words) {
        const next = result ? result + " " + word : word;
        if ((0, tokens_1.countTokens)(next + suffix) > limit)
            break;
        result = next;
    }
    return result + suffix;
}
