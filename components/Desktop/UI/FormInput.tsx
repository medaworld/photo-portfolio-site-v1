import { Input } from '../../../styles/components/Desktop/UI/FormInput';

export default function FormInput({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (arg: any) => void;
}) {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
}
