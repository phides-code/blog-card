import styled from 'styled-components';
import { DisplaybleBlogPost } from './types';
import TrimmedContent from './TrimmedContent';

interface CardProps {
    blogPost: DisplaybleBlogPost;
}

const Card = ({ blogPost }: CardProps) => {
    return (
        <Wrapper>
            <CoverImage
                src={blogPost.cover_image_source}
                alt={blogPost.title}
            />
            <PostInfoContainer>
                <Category style={{ backgroundColor: blogPost.category_color }}>
                    {blogPost.category.toUpperCase()}
                </Category>
                <Title>{blogPost.title}</Title>
                <TrimmedContent content={blogPost.content} />
                <AuthorInfoContainer>
                    <AuthorAvatar src={blogPost.author_avatar_source} />
                    <NameAndTimeStampContainer>
                        <AuthorName>{blogPost.author_name}</AuthorName>
                        <Timestamp>{blogPost.timestamp}</Timestamp>
                    </NameAndTimeStampContainer>
                </AuthorInfoContainer>
            </PostInfoContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 27.813rem;
    border-radius: 10px;
    background-color: white;
    margin: 0.6rem;
`;

const CoverImage = styled.img`
    border-radius: 10px;
    max-width: 100%;
`;

const PostInfoContainer = styled.div`
    padding: 1.438rem 1.6rem;
`;

const Category = styled.div`
    font-size: small;
    color: white;
    width: fit-content;
    height: 1.188rem;
    padding: 0 0.625rem;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.8rem 0;
`;

const AuthorInfoContainer = styled.div`
    display: flex;
    margin: 2rem 0 0.8rem;
`;

const AuthorAvatar = styled.img`
    height: 3rem;
    border-radius: 50%;
    margin: 0 0.8rem 0 0;
`;

const NameAndTimeStampContainer = styled.div``;
const AuthorName = styled.div`
    font-weight: bold;
`;
const Timestamp = styled.div``;

export default Card;
