import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
}

@Injectable({ providedIn: 'root' })
export class ChallengesService {
  constructor(private afs: AngularFirestore) {}

  async getChallenges(): Promise<Challenge[]> {
    const col = this.afs.collection<Challenge>(
      'challenges',
      ref => ref.orderBy('start', 'desc')
    );
    return firstValueFrom(col.valueChanges({ idField: 'id' }));
  }
}
