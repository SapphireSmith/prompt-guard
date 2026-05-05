import { sanitize } from "./sanitize";
import { estimateTokens } from "./tokens";
import { truncateToFit } from "./truncate";

export function guard(input: string, maxTokens = 500) {
    const { output, flagged } = sanitize(input);
    const truncated = truncateToFit(output, maxTokens);
    const tokens = estimateTokens(truncated);

    return {
        output: truncated,
        tokens,
        flagged
    };
}