import { deleteDoc, doc, setDoc } from '@firebase/firestore';
import { v4 } from 'uuid';
import { projectFirestore } from '../firebase/config';

export function addCategory(category: string, img?: string | null) {
  const id = v4();
  setDoc(doc(projectFirestore, 'categories', id), {
    id: id,
    category: category,
    category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    coverImg: img ? img : null,
    timeCreated: new Date(),
  });
}

export function updateCategory(
  id: string,
  category: string,
  img?: string | null
) {
  setDoc(doc(projectFirestore, 'categories', id), {
    id: id,
    category: category,
    category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    coverImg: img ? img : null,
    timeCreated: new Date(),
  });
}

export function deleteCategory(id: string) {
  const docRef = doc(projectFirestore, 'categories', id);
  deleteDoc(docRef).catch((err) => console.log(err));
}

export function addSubCategory(
  category: string,
  subcategory: string,
  img?: string | null
) {
  const id = v4();
  setDoc(doc(projectFirestore, 'subcategories', id), {
    id: id,
    category: category,
    subcategory: subcategory,
    category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    subcategory_lower: subcategory?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    coverImg: img ? img : null,
  });
}

export function updateSubCategory(
  id: string,
  category: string,
  subcategory: string,
  img?: string | null
) {
  setDoc(doc(projectFirestore, 'subcategories', id), {
    id: id,
    category: category,
    subcategory: subcategory,
    category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    subcategory_lower: subcategory?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    coverImg: img ? img : null,
    timeCreated: new Date(),
  });
}

export function deleteSubCategory(id: string) {
  const docRef = doc(projectFirestore, 'subcategories', id);
  deleteDoc(docRef).catch((err) => console.log(err));
}

export function updateImage(
  id: string,
  description: string | undefined,
  category: string | undefined,
  subcategory: string | undefined,
  dateTaken: Date,
  url: string,
  timeCreated: Date
) {
  setDoc(doc(projectFirestore, 'images', id), {
    id: id,
    url: url,
    dateTaken: dateTaken,
    description: description,
    category: category,
    subcategory: subcategory,
    category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    subcategory_lower: subcategory?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
    timeCreated: timeCreated,
  });
}
