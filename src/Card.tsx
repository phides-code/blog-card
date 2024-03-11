import styled from 'styled-components';
import { DisplaybleBlogPost } from './types';
import TrimmedContent from './TrimmedContent';
import moment from 'moment';

interface CardProps {
    blogPost: DisplaybleBlogPost;
}

const formatTimeAgo = (epochTime: number) => {
    return moment(epochTime).fromNow();
};

const Card = ({ blogPost }: CardProps) => {
    const getRandomNumber = () => Math.floor(Math.random() * 5);

    const coverImage =
        blogPost.cover_image_source !== ''
            ? blogPost.cover_image_source
            : 'banner-' + getRandomNumber() + '.png';

    const authorAvatar =
        blogPost.author_avatar_source !== ''
            ? blogPost.author_avatar_source
            : 'headshot-' + getRandomNumber() + '.png';

    return (
        <Wrapper>
            <CoverImage src={coverImage} alt={blogPost.title} />
            <PostInfoContainer>
                <Category style={{ backgroundColor: blogPost.category_color }}>
                    {blogPost.category.toUpperCase()}
                </Category>
                <Title>{blogPost.title}</Title>
                <TrimmedContent content={blogPost.content} />
                <AuthorInfoContainer>
                    <AuthorAvatar src={authorAvatar} />
                    <NameAndTimestampContainer>
                        <AuthorName>{blogPost.author_name}</AuthorName>
                        <Timestamp>
                            {formatTimeAgo(blogPost.timestamp)}
                        </Timestamp>
                    </NameAndTimestampContainer>
                </AuthorInfoContainer>
            </PostInfoContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-width: 18rem;
    max-width: 27.813rem;
    border-radius: 10px;
    background-color: white;
    margin: 0.6rem;
`;

const CoverImage = styled.img`
    border-radius: 10px 10px 0 0;
    max-height: 21.526rem;
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

const NameAndTimestampContainer = styled.div``;
const AuthorName = styled.div`
    font-weight: bold;
`;
const Timestamp = styled.div`
    color: gray;
`;

export default Card;
