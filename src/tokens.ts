export function countTokens(input: string): number {
    const cleaned = input.trim().replace(/\s+/g, " ");
    return Math.ceil(cleaned.length / 4);
}

export function isWithinBudget(input: string, limit: number): boolean {
    return countTokens(input) <= limit;
}