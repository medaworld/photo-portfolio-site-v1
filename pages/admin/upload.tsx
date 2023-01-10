import { useState } from 'react';
import ImageGrid from '../../components/Desktop/Admin/ImageGrid';
import UploadButton from '../../components/Desktop/Admin/UploadButton';
import UploadForm from '../../components/Desktop/Admin/UploadForm';
import useStorage from '../../helpers/hooks/useStorage';

import { Error } from '../../helpers/organizers/types';
import { UploadPage } from '../../styles/components/Desktop/Admin/Upload';

export default function AdminUploadPage() {
  const [uploadFormShown, setUploadFormShown] = useState(false);

  const showFormHandler = () => {
    setUploadFormShown(true);
  };

  const hideFormHandler = () => {
    setUploadFormShown(false);
  };

  return (
    <UploadPage>
      {uploadFormShown && <UploadForm onClose={hideFormHandler} />}
      <UploadButton onShowForm={showFormHandler} />
      <ImageGrid />
    </UploadPage>
  );
}
