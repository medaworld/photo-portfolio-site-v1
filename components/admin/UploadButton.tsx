import Card from '../ui/Card';
import Icon from '../ui/Icon';

import AddIcon from '/public/icons/add.png';

function UploadButton(props: { onShowForm: () => void }) {
  return (
    <Card>
      <h2>Upload Photos</h2>
      <div onClick={props.onShowForm}>
        <Icon img={AddIcon.src} size={40} />
      </div>
    </Card>
  );
}

export default UploadButton;
