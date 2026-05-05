import { estimateTokens } from "./tokens";

export function truncateToFit(input: string, maxTokens: number) {
    let text = input;

    while (estimateTokens(text) > maxTokens) {
        text = text.slice(0, -1);
    }

    return text;
}