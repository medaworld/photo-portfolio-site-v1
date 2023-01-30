import { CustomButton } from '../../../styles/components/Desktop/UI/Button';

export default function Button({
  text,
  onClick,
  textColor,
  buttonColor,
  type,
  value,
}: {
  text: string;
  onClick?: () => void;
  textColor?: string;
  buttonColor?: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
}) {
  return (
    <CustomButton
      textColor={textColor}
      buttonColor={buttonColor}
      onClick={onClick}
      type={type}
      value={value}
    >
      {text}
    </CustomButton>
  );
}
