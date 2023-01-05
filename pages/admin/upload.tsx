import { useState } from 'react';
import ImageGrid from '../../components/admin/ImageGrid';
import UploadButton from '../../components/admin/UploadButton';
import UploadForm from '../../components/admin/UploadForm';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ProgressBar from '../../components/ui/ProgressBar';
import useStorage from '../../helpers/hooks/useStorage';

import { Error } from '../../helpers/organizers/types';
import { UploadPage } from '../../styles/components/admin/Upload';

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
