export interface BlogPost {
    id: string;
    category: string;
    title: string;
    content: string;
    author_id: string;
    timestamp: number;
    cover_image_source: string;
}

export interface Author {
    id: string;
    name: string;
    avatar_source: string;
}

export interface Category {
    category_name: string;
    color: string;
}

export interface DisplaybleBlogPost extends BlogPost {
    author_name: string;
    author_avatar_source: string;
    category_color: string;
}
