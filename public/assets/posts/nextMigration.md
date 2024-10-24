## From Vite to Next.js

In another post, I said I wanted to add a blog part in my portfolio, and having some issues with it, I opted to use Next.js to create the blog part of my portfolio.
</br>
**That was a hard task.**

But, nonetheless, I managed to do it !! Hurray :) 

## What I did

| *I followed migration tutorials from the Next.js official documentation. [Migrating from Vite to Next.js](https://nextjs.org/docs/migrating/from-vite) </br>*
> **Note** This tutorial was focused to keep a Client Side Rendering (CSR) approach, at first, to quickly migrate the project to a functional state.


1. I added the necessary dependencies to the project, updated necessary configs files, typescript configurations file too.
2. I had to create an `app` directory at my project root, alongside my `src` directory who contains the whole react project. And move bit by bit.
3. But first, I needed to create `layout` file. The layout would receive content from my original `index.html` file. But, Next tutorial told me that lot of thing that was in Index wasn't necessary anymore. Like favicon, who is automatically used if placed in app directory. Plus, metadata tags where used differently too. 
4. After those changes, I had to create a `[[...slug]]` directory where I had to create my first `page.tsx` and `client.tsx` files. All of this, to create a Client Side Rendering (CSR) approach, but using content from my original React project.
5. There were some changes to Image import too, some cleanup, changes in `package.json` scripts.
> I eventually faced a problem. Next tutorial was telling at this moment that my project would work as usual. But nay, it didn't. I had to dig for some time to find out that I had issues with my fonts import. 
6. After that, I got a nearly working app. "Nearly", because accessing a project page would give me a 404 error. But since the project was completely scattered and manipulated with a lot of changes, I expected issues with everything relying on dynamic imports.

## The aftermath
1. After managing to just have a working home page, I decided to start switching to a Server Side Rendering (SSR) approach. I had to move all pages in `/app` and rename each to `page.tsx`. I removed the first `page.tsx`, `client.tsx` and `slug` directory. They were here only for doing a CSR transition. I could still need a `client.tsx` file in the future, if I need CSR for a specific page. But for now, I don't need it.
2. For my styles. Since I used SCSS, I found that next.js has a built-in support for SCSS, especially by using modules. So I had to change my styles files to SCSS modules. (_home.scss -> _home.module.scss and directly import module inside /home/page.tsx). </br> The advantage of using SCSS modules is that you can use the same class name in different files without worrying about conflicts. But, since my whole project was made without this at first, all my className are unique. But I still switched to SCSS modules to learn how to use it. It could be useful in the future. 
3. Then I needed the manage all "useState" hooks, since it don't work with SSR, I had a lot of errors with this. I needed to rework my language switcher too who got broken in the migration.

### The swipe handler

On my home page, I had made a swipe system for touch device with some useState hook to handle currentPage position. But, since it was using `useState`, it was broken. Because `useState` doesn't work with SSR. I mean, `useState` is a client-side hook, and it can't be used on the server. So I had to find a way to make it work. Either by adding client-side rendering to this specific page, or by using another hook that works on the server like `useRef`. But enabling CSR was a quicker solution. 
I could just encapsulate the interactive part too, but I needed to be done with this migration.
