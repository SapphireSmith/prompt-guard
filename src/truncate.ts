import { countTokens } from "./tokens";

interface TruncateOptions {
    limit: number;
    suffix?: string;
}

export function truncateToFit(input: string, options: TruncateOptions): string {
    const { limit, suffix = "..." } = options;

    if (countTokens(input) <= limit) return input;

    const words = input.split(" ");
    let result = "";

    for (const word of words) {
        const next = result ? result + " " + word : word;

        if (countTokens(next + suffix) > limit) break;

        result = next;
    }

    return result + suffix;
}