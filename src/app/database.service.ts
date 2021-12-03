import { Award } from './shared/award';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

  getAwards(): Observable<Award[]> {
    const awardsCollection = collection(this.firestore, 'awards');
    // this method returns a stream of documents mapped to their payload and id
    return collectionData(awardsCollection, {idField: 'id'})
    .pipe(
      map(awards => awards as Award[])
    );
  }

  getAwardById(id: string): Observable<Award> {
    const document = doc(this.firestore, `awards/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const Award_Number = doc.id;
        const data = doc.data();
        return { Award_Number, ...data } as unknown as Award;
      })
    );
  }

  createAward(award: Award): Promise<void> {
    const document = doc(collection(this.firestore, 'awards'));
    return setDoc(document, award);
  }

  updateAward(award: Award): Promise<void> {
    const document = doc(this.firestore, 'awards', award?.id);
    const { id, ...data } = award; // we don't want to save the id inside the document
    return setDoc(document, data);
  }

  deleteAward(id: string): Promise<void> {
    const document = doc(this.firestore, 'awards', id);
    return deleteDoc(document);
  }
}
