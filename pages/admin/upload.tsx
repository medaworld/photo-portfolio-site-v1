import { useState } from 'react';
import ImageGrid from '../../components/admin/ImageGrid';
import UploadForm from '../../components/admin/UploadForm';
import ProgressBar from '../../components/ui/ProgressBar';
import useStorage from '../../helpers/hooks/useStorage';

import { Error } from '../../helpers/organizers/types';
import { UploadPage } from '../../styles/components/admin/Upload';

export default function AdminUploadPage() {
  const { progress, urls } = useStorage();

  return (
    <UploadPage>
      <UploadForm />
      <ImageGrid urls={urls} />
    </UploadPage>
  );
}
