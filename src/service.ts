import blogPosts from './assets/blog-posts.json';
import authors from './assets/authors.json';
import categories from './assets/categories.json';
import { Author, BlogPost, Category } from './types';

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts;
}

export function getAuthorById(authorId: string): Author | undefined {
    return authors.find((author) => author.id === authorId);
}

export function getCategoryByName(categoryName: string): Category | undefined {
    return categories.find(
        (category) => category.category_name === categoryName
    );
}
