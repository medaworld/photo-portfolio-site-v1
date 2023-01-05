import styled from 'styled-components';
import { hexToRGBA } from '../../../helpers/functions/colors';

export const FormWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 15px;
  flex-wrap: wrap;

  input {
    margin: 15px 0;
  }

  button {
    width: 200px;
    height: 25px;
    margin-top: 15px;
  }
`;

export const ImageUpload = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(p) => hexToRGBA(p.theme.colors.primary, 0.2)};
    border-radius: 10px;
    width: 350px;
    height: 350px;

    &:hover {
      opacity: 90%;
    }
  }

  #upload-photo {
    opacity: 0;
    position: absolute;
  }
`;

export const UploadArea = styled.label`
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const ImageDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input``;
