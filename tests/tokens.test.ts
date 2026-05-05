import { countTokens, isWithinBudget } from "../src/tokens";

test("counts tokens correctly", () => {
    expect(countTokens("Hello world")).toBeGreaterThan(0);
});

test("within budget", () => {
    expect(isWithinBudget("Hello", 10)).toBe(true);
});

test("exceeds budget", () => {
    expect(isWithinBudget("This is a long sentence", 1)).toBe(false);
});