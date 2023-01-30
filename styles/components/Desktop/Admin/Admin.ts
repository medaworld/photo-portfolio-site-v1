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

  ul:nth-child(2) {
    margin: 20% 0;
  }

  ul:last-child {
    position: absolute;
    bottom: 0;
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

export const AddCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseIcon = styled.div`
  margin: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
  height: 25px;
  text-align: center;
`;

export const BarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  form {
    display: flex;
    flex-direction: column;
  }
`;
