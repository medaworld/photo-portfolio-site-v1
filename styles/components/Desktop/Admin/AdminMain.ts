import styled from 'styled-components';

export const AdminMainPage = styled.div`
  display: flex;
`;

export const SideBar = styled.div`
  height: 90vh;
  width: 250px;

  ul {
    list-style: none;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  ul:last-child {
    margin-top: 20%;
  }
`;

export const SidebarItem = styled.li<{ selected: boolean }>`
  padding: 10px;
  height: 50px;
  width: 250px;
  display: flex;
  border-radius: 0 15px 15px 0;
  background-color: ${(p) => (p.selected ? p.theme.colors.selected : '')};
  transition: background-color 0.1s ease-out;
  align-items: center;
  font-size: 20px;

  p {
    line-height: 10px;
    align-self: center;
    text-align: center;
    margin-left: 10px;
  }

  :hover {
    cursor: pointer;
    background-color: ${(p) =>
      p.selected ? p.theme.colors.selected : p.theme.colors.hover};
    filter: brightness(0.95);
  }
`;

export const GalleryContainer = styled.div`
  height: 85vh;
  overflow: scroll;
  display: flex;
`;

export const Gallery = styled.div`
  display: block;
  position: relative;
`;

export const GallerySection = styled.div`
  display: block;
  position: relative;
`;

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
  max-width: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const BarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled.div`
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

export const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const PrimaryButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => p.theme.colors.color};
  height: 40px;
  width: 100%;
  transition: all 0.1s ease;
  overflow: hidden;
  margin-top: 10px;
  border-radius: 10px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: #e72b2b;
  height: 40px;
  width: 100%;
  transition: all 0.1s ease;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CategoryViewHeader = styled.div`
  height: 35px;
`;

export const ListViewMain = styled.div`
  height: 100%;
  overflow: scroll;
`;

export const ListViewItem = styled.div<{ selected: boolean }>`
  padding: 15px;
  font-size: 1.1rem;
  background-color: ${(p) => (p.selected ? p.theme.colors.selected : '')};

  :hover {
    cursor: pointer;
    background-color: ${(p) =>
      p.selected ? p.theme.colors.selected : p.theme.colors.hover};
    filter: brightness(0.95);
  }
`;

export const FilterSelectorContainer = styled.div`
  height: 45px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  overflow-x: auto;
`;

export const SelectorItem = styled.div<{ selected: boolean }>`
  background-color: ${(p) =>
    p.selected ? p.theme.colors.selected : p.theme.colors.hover};
  padding: 0 15px;
  margin-right: 10px;
  text-align: center;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 1.1rem;

  :hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;
