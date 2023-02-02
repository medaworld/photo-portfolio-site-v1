import { deleteDoc, doc, setDoc } from '@firebase/firestore';
import { v4 } from 'uuid';
import { projectFirestore } from '../firebase/config';
import notificationOperations from './notification';

export default function firestoreOperations() {
  const {
    successAdd,
    successUpdate,
    successDelete,
    errorAdd,
    errorUpdate,
    errorDelete,
  } = notificationOperations();

  function addCategory(category: string, img?: string | null) {
    const id = v4();
    setDoc(doc(projectFirestore, 'categories', id), {
      id: id,
      category: category,
      category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
      coverImg: img ? img : null,
      timeCreated: new Date(),
    })
      .then(() => successAdd())
      .catch(() => errorAdd());
  }

  function updateCategory(id: string, category: string, img?: string | null) {
    setDoc(doc(projectFirestore, 'categories', id), {
      id: id,
      category: category,
      category_lower: category?.replace(/[^a-z0-9]/gi, '').toLowerCase(),
      coverImg: img ? img : null,
      timeCreated: new Date(),
    })
      .then(() => {
        successUpdate();
      })
      .catch((err) => {
        errorUpdate();
      });
  }

  function deleteCategory(id: string) {
    const docRef = doc(projectFirestore, 'categories', id);
    deleteDoc(docRef)
      .catch((err) => console.log(err))
      .then(() => {
        successDelete();
      })
      .catch((err) => {
        errorDelete();
      });
  }

  function addSubCategory(
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
    })
      .then(() => successAdd())
      .catch(() => errorAdd());
  }

  function updateSubCategory(
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
    })
      .then(() => {
        successUpdate();
      })
      .catch((err) => {
        errorUpdate();
      });
  }

  function deleteSubCategory(id: string) {
    const docRef = doc(projectFirestore, 'subcategories', id);
    deleteDoc(docRef)
      .catch((err) => console.log(err))
      .then(() => {
        successDelete();
      })
      .catch((err) => {
        errorDelete();
      });
  }

  function updateImage(
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
    })
      .then(() => {
        successUpdate();
      })
      .catch((err) => {
        errorUpdate();
      });
  }

  return {
    addCategory,
    updateCategory,
    deleteCategory,
    addSubCategory,
    updateSubCategory,
    deleteSubCategory,
    updateImage,
  };
}
