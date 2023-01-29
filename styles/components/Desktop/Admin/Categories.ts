import styled from 'styled-components';

export const CategoriesPage = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  height: 25px;
  text-align: center;
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
`;
export const Subcategories = styled.div`
  width: 100%;
  display: flex;
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

export const Selection = styled.select`
  width: 100%;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  height: 393px;
  color: ${(p) => p.theme.colors.hover};

  &:focus {
    outline: none;
  }
`;

export const AddCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.background};
  padding: 10px 15px;
  font-size: 16px;
  height: 40px;
  color: ${(p) => p.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => p.theme.colors.color};
  height: 40px;
  width: 100%;
  transition: all 0.1s ease;
  overflow: hidden;

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

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const CoverSelectContainer = styled.div`
  width: 100%;
  margin-top: 5px;
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

export const ImgContainer = styled.div`
  padding: 10px;
  align-items: center;
  transition: all 0.3s ease;
`;

export const PrevImg = styled.img`
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
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

export const DetailBar = styled.div`
  min-width: 300px;
  max-width: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
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
