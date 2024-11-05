import styles from './Blog.module.scss';
import { getAllPostsData} from "../../lib/blog_functions";
import Link from 'next/link';
import NotFound from "../not-found";

export default async function Blogs() {
  const blogs = await getAllPostsData();

  //ifnopostsfound

    if (blogs.length === 0) {
        return <NotFound />
    }

    //ifpostsfound

    return (
        <div className={styles.blogPage}>
            <ul className={styles.blogList}>
                {blogs.map((blog) => {
                return (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`} tabIndex={-1}>
                                <h3 className={styles.blogTitle} tabIndex={1}>{blog.title}</h3>
                                <p className= {styles.blogDate}>{blog.date.toDateString()}</p>
                        </Link>
                    </li>
                );
                })}
            </ul>
        </div>
    )
}