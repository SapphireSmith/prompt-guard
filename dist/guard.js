"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = guard;
const sanitize_1 = require("./sanitize");
const tokens_1 = require("./tokens");
const truncate_1 = require("./truncate");
function guard(input, options = {}) {
    const { sanitize: shouldSanitize = true, sanitizeMode = "remove", limit = 4096, truncate: shouldTruncate = true, suffix = "..." } = options;
    const originalTokens = (0, tokens_1.countTokens)(input);
    let processed = input;
    let wasSanitized = false;
    let wasTruncated = false;
    if (shouldSanitize) {
        const sanitized = (0, sanitize_1.sanitize)(input, { mode: sanitizeMode });
        if (sanitized !== input) {
            wasSanitized = true;
            processed = sanitized;
        }
    }
    if (shouldTruncate && (0, tokens_1.countTokens)(processed) > limit) {
        processed = (0, truncate_1.truncateToFit)(processed, { limit, suffix });
        wasTruncated = true;
    }
    const outputTokens = (0, tokens_1.countTokens)(processed);
    return {
        output: processed,
        originalTokens,
        outputTokens,
        wasSanitized,
        wasTruncated
    };
}
