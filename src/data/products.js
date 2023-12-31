// products.js

import { getDocs, collection } from "@firebase/firestore";
import { db } from "../database/firebase";

const products = async () => {
  try {
    const docSnap = await getDocs(collection(db, "Product"));

    // Eğer belgeler varsa dönüştürme işlemini gerçekleştir, yoksa boş bir dizi döndür
    const productsArray = docSnap.docs.length > 0
      ? docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      : [];
    return productsArray;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
export default products;
