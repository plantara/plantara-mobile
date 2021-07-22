import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private storage: Storage) {
    await this.storage.create();
  }

  async ngOnInit() {
  }
}
