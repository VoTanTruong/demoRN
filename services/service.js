import { firebaseFirestore } from "../firebase/Config"

export function getECData() {
    return firebaseFirestore
        .collection("Test")
        .get()
        .then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, name: doc.data().name });
            });
            return data
        });
}