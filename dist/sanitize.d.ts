export type SanitizeMode = "remove" | "replace";
interface SanitizeOptions {
    mode?: SanitizeMode;
    placeholder?: string;
    customPatterns?: string[];
}
export declare function sanitize(input: string, options?: SanitizeOptions): string;
export {};
