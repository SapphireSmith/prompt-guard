export function estimateTokens(input: string): number {
    const cleaned = input.trim().replace(/\s+/g, " ");
    return Math.ceil(cleaned.length / 4);
}