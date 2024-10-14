## Creating a Blog

| *This is a blog post about creating a blog. It's a bit meta, but it's a good way to learn about the process of creating a blog.* 

I wanted to create a blog-like part in my portfolio. To share about my projects, and mostly, about my learning process. </br>
Since my portfolio was made with React with VITE, I had some issues to make it work. </br>
I wanted to use markdown files to write my posts, and I wanted to use the frontmatter to get the title, date, and other information about the post. </br>
But, React with VITE wasn't the perfect match for this. It was hard to automate the process of getting the markdown files and parsing them to the blog page. </br>
I managed to import and parse them manually, one by one, by naming them individually in the import statement. But it wasn't the best solution. </br>
I wanted to automate this process, to make it easier to add new posts. So I decided to use Next.js to create the blog part of my portfolio.

### \- Why ? </br>
Because I found that Next.js has a great feature called `getStaticProps` that allows you to fetch data at build time. So I can fetch the markdown files and parse them to the blog page at build time. This way, I can automate the process of adding new posts. </br>
I just have to add a new markdown file in the posts folder, and it will be automatically added to the blog page. 

### \- How ? </br>

1. First, I had to migrate my React portfolio to Next.js. I created a new Next.js project and copied the files from the React project to the Next.js project. </br>
2. I had already created a `posts` folder in the React project, so I copied it to the Next.js project. Actually, this post was created before having the whole blog thing working. </br>
3. Then, I created a `getPosts` function to fetch the markdown files from the posts folder. </br>
4. I used the `gray-matter` library to parse the markdown files and get the frontmatter. </br>
5. I created a `Blog` component to display the posts. </br>
6. I used the `getStaticProps` function to fetch the posts at build time. </br>
7. I used the `Link` component from Next.js to link to the blog page. </br>
8. I used the `useRouter` hook to get the `slug` of the post and display the post content. </br>
9. I used the `remark` and `remark-html` libraries to parse the markdown content to HTML. </br>
10. I used the `react-markdown` library to display the HTML content. </br>

And that's it! Now I have a blog in my portfolio. </br>

*Of course, I still need to style the whole thing, but that's not the hardest.*
