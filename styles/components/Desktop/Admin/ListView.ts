import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const DetailBar = styled.div`
  min-width: 300px;
  max-width: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const ImgContainer = styled.div`
  padding: 10px;
  align-items: center;
  transition: all 0.3s ease;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  height: 20px;
`;

export const Gallery = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, minmax(0px, 200px));
  justify-content: center;
  grid-gap: 15px;
  height: 328px;
  background-color: white;
  padding: 10px;
  overflow: scroll;
`;

export const GalleryItem = styled.div<{ img: string; selected?: boolean }>`
  background: center url(${(p: any) => p.img});
  background-size: cover;
  padding-bottom: 100%;
  outline: ${(p) => (p.selected ? '3px solid #02d002' : 'none')};
  cursor: pointer;

  &:hover {
    opacity: 90%;
  }
`;

export const CoverSelectContainer = styled.div`
  width: 100%;
  margin-top: 5px;
`;
