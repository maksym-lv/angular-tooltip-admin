import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class ImageService {
  getImages() {
    return [...IMAGES_MOCK];
  }
}



const IMAGES_MOCK = [
  {id: 1, category: 'view', url: 'assets/img/annie-spratt-5LD1pzFifU0-unsplash.jpg'},
  {id: 2, category: 'view', url: 'assets/img/christina-hernandez-829dmJ6DN3w-unsplash.jpg'},
  {id: 3, category: 'view', url: 'assets/img/eric-vadeboncoeur-BgUDIlnnrXg-unsplash.jpg'},
  {id: 4, category: 'view', url: 'assets/img/greg-ortega-1LCzr14Ah5U-unsplash.jpg'},
  {id: 5, category: 'view', url: 'assets/img/joseph-chan-a1MT14dlZYs-unsplash.jpg'},
  {id: 6, category: 'view', url: 'assets/img/joseph-gonzalez-rp3c2RMcwgw-unsplash.jpg'},
  {id: 7, category: 'view', url: 'assets/img/lucy-heath-M01DfkOqz7I-unsplash.jpg'},
  {id: 8, category: 'view', url: 'assets/img/nikhita-singhal-k8y9HrzonOQ-unsplash.jpg'},
  {id: 9, category: 'view', url: 'assets/img/pineapple-supply-co-T7h7_v4Nwao-unsplash.jpg'},
  {id: 10, category: 'view', url: 'assets/img/rodrigo-ruiz-rM5ZHrQvUCc-unsplash.jpg'}
];

