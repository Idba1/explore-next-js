import React from 'react';

const page = ({ params }) => {
    console.log(params.slug);
    const singleBlog=blogs.find((blog)=>blog.slug==params.slug);
    const{title,description}=singleBlog;
    return (
        <div className='h-auto'>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    );
};


const blogs = [
    {
        "slug": "how-to-learn-react",
        "title": "How to Learn React: A Complete Guide",
        "description": "This guide covers everything you need to know to start learning React and build dynamic web applications."
    },
    {
        "slug": "mastering-javascript",
        "title": "Mastering JavaScript for Web Development",
        "description": "Learn the key concepts and best practices of JavaScript, from beginner to advanced level."
    },
    {
        "slug": "tailwind-css-tips",
        "title": "10 Tailwind CSS Tips You Should Know",
        "description": "Explore powerful tips and techniques to improve your workflow with Tailwind CSS."
    },
    {
        "slug": "understanding-nodejs",
        "title": "Understanding Node.js: A Beginner's Guide",
        "description": "Get started with Node.js and learn how to build fast, scalable network applications."
    },
    {
        "slug": "firebase-authentication",
        "title": "Implementing Firebase Authentication in React",
        "description": "A step-by-step guide to adding Firebase authentication to your React applications."
    },
    {
        "slug": "mongodb-vs-sql",
        "title": "MongoDB vs SQL: Which One to Choose?",
        "description": "Compare the pros and cons of using MongoDB versus SQL for your next project."
    },
    {
        "slug": "responsive-web-design",
        "title": "Responsive Web Design: Best Practices",
        "description": "Learn how to create responsive, mobile-friendly web designs using modern CSS techniques."
    },
    {
        "slug": "api-integration-react",
        "title": "API Integration in React: A Comprehensive Guide",
        "description": "Discover how to fetch, display, and manage data from APIs in your React applications."
    },
    {
        "slug": "nextjs-vs-react",
        "title": "Next.js vs React: Which Framework is Better?",
        "description": "A detailed comparison of Next.js and React, highlighting the key differences and when to use each."
    },
    {
        "slug": "css-grid-vs-flexbox",
        "title": "CSS Grid vs Flexbox: Which Layout System to Choose?",
        "description": "Understand the differences between CSS Grid and Flexbox, and when to use each for layout design."
    }
]
export default page;