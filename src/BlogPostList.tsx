import Card from './Card';
import { getAllBlogPosts, getAuthorById, getCategoryByName } from './service';
import { BlogPost, DisplaybleBlogPost } from './types';

const BlogPostList = () => {
    const blogPosts: BlogPost[] = getAllBlogPosts();
    return (
        <div>
            {blogPosts.map((blogPost) => {
                const author = getAuthorById(blogPost.author_id);
                const category = getCategoryByName(blogPost.category);
                const displayableBlogPost: DisplaybleBlogPost = {
                    ...blogPost,
                    author_name: author?.name as string,
                    author_avatar_source: author?.avatar_source as string,
                    category_color: category?.color as string,
                };
                return (
                    <Card key={blogPost.id} blogPost={displayableBlogPost} />
                );
            })}
        </div>
    );
};

export default BlogPostList;
