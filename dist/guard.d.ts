type SanitizeMode = "remove" | "replace";
interface GuardOptions {
    sanitize?: boolean;
    sanitizeMode?: SanitizeMode;
    limit?: number;
    truncate?: boolean;
    suffix?: string;
}
export declare function guard(input: string, options?: GuardOptions): {
    output: string;
    originalTokens: number;
    outputTokens: number;
    wasSanitized: boolean;
    wasTruncated: boolean;
};
export {};
