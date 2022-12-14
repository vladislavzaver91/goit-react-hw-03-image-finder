import styled from '@emotion/styled';

export const ImgGallery = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    max-width: calc(100vw - 48px);
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 16px;
`;