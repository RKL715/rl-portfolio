/**
 * Scan the blog(CONTENT) directory and return an array of file names
 * @returns
 */
import {readdirSync} from "node:fs";
import path from "node:path";

export function getPostNames (): string[] {
    try {
        const fileList: string[] = readdirSync(path.join(process.cwd(), "app/blog/content"));
        if (fileList.length > 0) {
            return fileList.map((file) => {
                return file.substring(0, file.lastIndexOf(".")) || file;
            });
        }

    } catch (error) {
        console.error("Error reading files from the blog directory", error);
    }
        return [];
}