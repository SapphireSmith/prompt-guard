import { sanitize } from "./sanitize";
import { countTokens } from "./tokens";
import { truncateToFit } from "./truncate";

type SanitizeMode = "remove" | "replace";

interface GuardOptions {
    sanitize?: boolean;
    sanitizeMode?: SanitizeMode;
    limit?: number;
    truncate?: boolean;
    suffix?: string;
}

export function guard(input: string, options: GuardOptions = {}) {
    const {
        sanitize: shouldSanitize = true,
        sanitizeMode = "remove",
        limit = 4096,
        truncate: shouldTruncate = true,
        suffix = "..."
    } = options;

    const originalTokens = countTokens(input);

    let processed = input;
    let wasSanitized = false;
    let wasTruncated = false;

    if (shouldSanitize) {
        const sanitized = sanitize(input, { mode: sanitizeMode });
        if (sanitized !== input) {
            wasSanitized = true;
            processed = sanitized;
        }
    }

    if (shouldTruncate && countTokens(processed) > limit) {
        processed = truncateToFit(processed, { limit, suffix });
        wasTruncated = true;
    }

    const outputTokens = countTokens(processed);

    return {
        output: processed,
        originalTokens,
        outputTokens,
        wasSanitized,
        wasTruncated
    };
}