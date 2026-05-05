const basePatterns = [
    /ignore\s+previous\s+instructions/gi,
    /ignore\s+all\s+instructions/gi,
    /you\s+are\s+now/gi,
    /act\s+as/gi,
    /pretend\s+you\s+are/gi,
    /forget\s+everything/gi,
    /disregard\s+your/gi,
    /your\s+new\s+instructions\s+are/gi,
    /system\s+prompt/gi,
    /jailbreak/gi
];

export type SanitizeMode = "remove" | "replace";

interface SanitizeOptions {
    mode?: SanitizeMode;
    placeholder?: string;
    customPatterns?: string[];
}

export function sanitize(input: string, options: SanitizeOptions = {}): string {
    const {
        mode = "remove",
        placeholder = "[REMOVED]",
        customPatterns = []
    } = options;

    let output = input;

    const customRegex = customPatterns.map(p => new RegExp(p, "gi"));
    const patterns = [...basePatterns, ...customRegex];

    for (const pattern of patterns) {
        if (mode === "replace") {
            output = output.replace(pattern, placeholder);
        } else {
            output = output.replace(pattern, "");
        }
    }

    return output
        .replace(/\s+/g, " ")
        .replace(/^[^\w]+/, "")   // remove leading punctuation
        .trim();
}