import styles from './Posts.module.scss';
import dynamic from 'next/dynamic';
import React from 'react';
import { getPostData } from '../../../lib/blog_functions';
import {Metadata} from "next";
import {getPostNames} from "../../../lib/useBlog";
import Link from "next/link";

export async function generateStaticParams () {
    const blogPosts = getPostNames();
    return blogPosts.map((post) => ({
        blogId: post,
    }))
}

type BlogPageProps = {
    params: { blogId: string};
};

export async function generateMetadata({
    params,
    }: BlogPageProps): Promise<Metadata> {
    const { blogId } = await params;
    //Load the blog post metadata using blog_functions.ts
    const metadata = await getPostData(blogId);
    if (metadata) {
        return {
            title: metadata.title,
        };
    }
    return {}; //Default return.
}

export default async function BlogPage({ params }: BlogPageProps) {

    const { blogId } = await params;
    const BlogPost = dynamic(() => import("../content/" + blogId + ".mdx"));

    return (
        <div className={styles.container}>
            <article>
                <BlogPost/>
            </article>
            <Link href="/blog" className={styles.returnLink}>
            <p className={styles.returnIcon}>←</p>
            </Link>
        </div>
    );
}