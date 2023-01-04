import { useState } from 'react';
import { projectStorage } from '../../firebase/config';
import { File } from '../organizers/types';

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
};
