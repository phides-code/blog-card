import styled from 'styled-components';

interface TrimmedContentProps {
    content: string;
}

const TrimmedContent = ({ content }: TrimmedContentProps) => {
    const trimStringTo100Chars = (content: string): string => {
        if (content.length <= 100) {
            return content;
        } else {
            return content.substring(0, 100) + '...';
        }
    };

    const trimmedContent = trimStringTo100Chars(content);

    return <Wrapper>{trimmedContent}</Wrapper>;
};

const Wrapper = styled.div``;

export default TrimmedContent;
