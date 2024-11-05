/**
 * Import a mdx blog post file and return the metadata.
 * @param blogId
 * @returns
 */
import { readdirSync} from "node:fs";
import path from "node:path";


export async function getPostData(blogId: string): Promise <{
    id: string;
    title: string;
    date: Date;
}>
{
    try {
        const file = await import ("../app/blog/content/" + blogId + ".mdx");
        console.log("file:", file);

        if (file?.metadata) return file.metadata;
        else {
            throw new Error ("No metadata found in " + blogId + ".mdx");
        }
    } catch (error: any) {
        console.error(error?.message);
    return {
        id: "",
        title: "",
        date: new Date(),
    };
}
}


export async function getAllPostsData(): Promise<
    {
        id: string;
        title: string;
        date: Date;
    }[]
> {
    try {
        //Read the /blog folder at root dir
        const fileList: string[] = readdirSync(path.join(process.cwd(),"app/blog/content"));
        console.log("filelist:", fileList);

        //Load each file
        if (fileList.length > 0) {
            const result = fileList.map(async (file) => {
                //Remove extension to get blogId
                const filename =
                    file.substring(0, file.lastIndexOf(".")) || file;
                //Tro to get metadata
                return { ...(await getPostData(filename)), id: filename };
            });

            return Promise.all(result);
        }
    } catch (error) {
        console.error("Error reading files from the blog directory", error);
    }
    return [];
}