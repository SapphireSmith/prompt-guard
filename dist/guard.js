"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = guard;
const sanitize_1 = require("./sanitize");
const tokens_1 = require("./tokens");
const truncate_1 = require("./truncate");
function guard(input, maxTokens = 500) {
    const { output, flagged } = (0, sanitize_1.sanitize)(input);
    const truncated = (0, truncate_1.truncateToFit)(output, maxTokens);
    const tokens = (0, tokens_1.estimateTokens)(truncated);
    return {
        output: truncated,
        tokens,
        flagged
    };
}
