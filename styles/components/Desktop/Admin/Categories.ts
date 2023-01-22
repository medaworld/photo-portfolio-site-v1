import styled from 'styled-components';

export const CategoriesPage = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  padding: 15px;
`;

export const CategorySection = styled.div`
  height: 500px;
  width: 50%;
`;

export const CategoryDetailSection = styled.div`
  height: 500px;
  width: 50%;
  margin-left: 15px;
`;

export const CategorySelection = styled.select`
  width: 100%;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  color: ${(p) => p.theme.colors.hover};

  &:focus {
    outline: none;
  }
`;

export const AddCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
`;

export const CategoryInput = styled.input`
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  color: ${(p) => p.theme.colors.hover};

  &:focus {
    outline: none;
  }
`;

export const CategoryAddButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => p.theme.colors.color};
  height: 40px;
  width: 100%;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const CoverSelectContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  position: relative;
  height: 100%;
`;

export const Subtitle = styled.div`
  font-size: 16px;
`;

export const Gallery = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, minmax(100px, 293px));
  justify-content: center;
  grid-gap: 15px;
  height: 80%;
  background-color: white;
  padding: 10px;
  overflow: scroll;
`;

export const GalleryItem = styled.div<{ img: string }>`
  background: center url(${(p: any) => p.img});
  background-size: cover;
  padding-bottom: 100%;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
