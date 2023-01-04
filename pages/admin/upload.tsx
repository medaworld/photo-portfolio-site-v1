import ImageGrid from '../../components/admin/ImageGrid';
import UploadForm from '../../components/admin/UploadForm';
import ProgressBar from '../../components/ui/ProgressBar';

export default function AdminUploadPage() {
  return (
    <>
      <UploadForm />
      {/* <ProgressBar /> */}
      <ImageGrid />
    </>
  );
}
