import { useRouter } from 'next/router';
import { ArrowWrapper } from '../../../styles/components/Desktop/UI/BackArrow';
import Icon from './Icon';

import backArrow from '/public/icons/backArrow.png';

export default function BackArrow() {
  const router = useRouter();
  return (
    <ArrowWrapper onClick={() => router.back()}>
      <Icon img={backArrow.src} size={30} color={'dark'} />
    </ArrowWrapper>
  );
}
