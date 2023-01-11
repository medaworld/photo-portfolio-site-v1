import { useState } from 'react';
import ImageGrid from '../../components/Desktop/Admin/ImageGrid';
import UploadButton from '../../components/Desktop/Admin/UploadButton';
import UploadOverlay from '../../components/Desktop/Admin/UploadOverlay';

import { UploadPage } from '../../styles/components/Desktop/Admin/Upload';

export default function AdminUploadPage() {
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  return (
    <UploadPage>
      {showUploadOverlay && <UploadOverlay onClose={hideFormHandler} />}
      <UploadButton onShowForm={showFormHandler} />
      <ImageGrid />
    </UploadPage>
  );
}
