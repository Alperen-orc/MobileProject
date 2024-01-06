import { useState, useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { db } from '../../../database/firebase';

const Notification = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollectionRef = collection(db, 'Product');

    const unsubscribe = onSnapshot(productsCollectionRef, (querySnapshot) => {
      const updatedProducts = [];
      querySnapshot.forEach((doc) => {
        const product = { id: doc.id, ...doc.data() };
        updatedProducts.push(product);
      });
      setProducts(updatedProducts);
    });

    return () => {
      // Komponentten çıkıldığında dinlemeyi kapat
      unsubscribe();
    };
  }, []);

  return products;
};

export default Notification;
