import { useEffect, useState } from "react";
import { firestore } from "../firebase/fireconfig";

const useCollection = (collection) => {

  const ref = firestore.collection(collection);
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = ref.onSnapshot((snapshot) => {
      let entries = [];
      snapshot.docs.forEach((each) => {
        entries.push({ id: each.id, ...each.data() });
    });
    setDocs(entries);
    setLoading(false);
    });

    return () => unsub();
  }, [collection]);

  const Send = async (newDoc) => {
    try {
      const ref = firestore.collection(collection);
      await ref.doc(newDoc.timestamp.toString()).set(newDoc);
    } catch (e) {
      console.log(e);
    }
  };

  return { docs, Send, loading };
};

export default useCollection;
