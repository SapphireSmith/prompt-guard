"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = sanitize;
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
function sanitize(input, options = {}) {
    const { mode = "remove", placeholder = "[REMOVED]", customPatterns = [] } = options;
    let output = input;
    const customRegex = customPatterns.map(p => new RegExp(p, "gi"));
    const patterns = [...basePatterns, ...customRegex];
    for (const pattern of patterns) {
        if (mode === "replace") {
            output = output.replace(pattern, placeholder);
        }
        else {
            output = output.replace(pattern, "");
        }
    }
    return output.trim().replace(/\s+/g, " ");
}
