import styled from 'styled-components';

export const AdminMainPage = styled.div`
  display: flex;
`;

export const SideBar = styled.div`
  height: 90vh;
  width: 250px;
  position: absolute;

  ul {
    list-style: none;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`;

export const SidebarItem = styled.li<{ selected: boolean }>`
  padding: 10px;
  border-radius: 0 15px 15px 0;
  background-color: ${(p) => (p.selected ? p.theme.colors.selected : '')};
  transition: background-color 0.1s ease-out;

  :hover {
    cursor: pointer;
    background-color: ${(p) =>
      p.selected ? p.theme.colors.selected : p.theme.colors.hover};
    filter: brightness(0.95);
  }
`;

export const AdminViewWindow = styled.div`
  height: 85vh;
  margin-left: 250px;
  overflow: scroll;
  display: flex;
`;

export const Gallery = styled.div`
  display: block;
  position: relative;
`;

export const GallerySection = styled.div``;

export const SectionTitle = styled.div`
  display: flex;
  height: 48px;
  margin-left: 10px;
  line-height: 48px;
`;

export const SectionImages = styled.div`
  column-count: 3;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-gap: 2px;
  -webkit-column-gap: 2px;
  column-width: 50%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 90%;
    cursor: pointer;
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailBar = styled.div`
  min-width: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const BarHeader = styled.div`
  width: 100%;
  height: 50px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  margin: 10px;
`;

export const FormDescription = styled.textarea`
  height: 20%;
  user-select: text;
  resize: none;
  border: none;
  font-family: Inter;
  color: ${(p) => p.theme.colors.primary};
  font-size: 16px;
  padding: 15px;
  /* margin-top: 50px; */
  overflow-y: hidden;

  :focus {
    outline: none;
  }
`;
