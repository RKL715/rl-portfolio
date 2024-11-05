import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: {
        // Keep image optimization enabled
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
    },
});

export default withMDX (nextConfig);