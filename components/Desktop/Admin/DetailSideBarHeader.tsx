import {
  BarHeader,
  CloseIcon,
  Title,
} from '../../../styles/components/Desktop/Admin/Admin';
import Icon from '../UI/Icon';

import closeIcon from '/public/icons/closeWindow.png';

export default function DetailSideBarHeader({
  detailSidebarClose,
  title,
}: {
  detailSidebarClose: () => void;
  title?: string;
}) {
  return (
    <BarHeader>
      <CloseIcon onClick={detailSidebarClose}>
        <Icon img={closeIcon.src} size={30} />
      </CloseIcon>
      <Title>{title}</Title>
    </BarHeader>
  );
}
