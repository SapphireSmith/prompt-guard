interface TruncateOptions {
    limit: number;
    suffix?: string;
}
export declare function truncateToFit(input: string, options: TruncateOptions): string;
export {};
