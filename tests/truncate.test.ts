import { truncateToFit } from "../src/truncate";

test("truncates long text", () => {
    const input = "The quick brown fox jumps over the lazy dog";
    const result = truncateToFit(input, { limit: 5 });

    expect(result.endsWith("...")).toBe(true);
});

test("does not truncate short text", () => {
    const input = "Hello world";
    const result = truncateToFit(input, { limit: 50 });

    expect(result).toBe(input);
});