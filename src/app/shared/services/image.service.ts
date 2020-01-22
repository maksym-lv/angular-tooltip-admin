import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { fromArray } from 'rxjs/internal/observable/fromArray';
import { SharedModule } from '../shared.module';
import { Image } from '../../interfaces/image';


@Injectable({
  providedIn: SharedModule
})
export class ImageService {
  getImages(): Observable<Image[]> {
    return of(IMAGES_MOCK).pipe(
      delay(500)
    );
  }

  getImageById(imageId: string): Observable<Image> {
    return fromArray(IMAGES_MOCK).pipe(
      filter((image: Image) => image.id === imageId),
      delay(500)
    );
  }

  updateImage(updatedImageData) {
    return [...IMAGES_MOCK].filter(image => image.id === updatedImageData.id).map(item => {
      return ({...item, tooltip_config: updatedImageData.tooltip_config});
    });
  }
}

const IMAGES_MOCK = [
  {
    id: '1',
    category: 'view',
    url: 'assets/img/annie-spratt-5LD1pzFifU0-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'right',
      color: 'blue'
    }
  },
  {
    id: '2',
    category: 'view',
    url: 'assets/img/christina-hernandez-829dmJ6DN3w-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'top',
      color: 'red'
    }
  },
  {
    id: '3',
    category: 'view',
    url: 'assets/img/eric-vadeboncoeur-BgUDIlnnrXg-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'bottom',
      color: 'red'
    }
  },
  {
    id: '4',
    category: 'view',
    url: 'assets/img/greg-ortega-1LCzr14Ah5U-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'left',
      color: 'red'
    }
  },
  {
    id: '5',
    category: 'view',
    url: 'assets/img/joseph-chan-a1MT14dlZYs-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'bottom',
      color: 'red'
    }
  },
  {
    id: '6',
    category: 'view',
    url: 'assets/img/joseph-gonzalez-rp3c2RMcwgw-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'top',
      color: 'red'
    }
  },
  {
    id: '7',
    category: 'view',
    url: 'assets/img/lucy-heath-M01DfkOqz7I-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'right',
      color: 'red'
    }
  },
  {
    id: '8',
    category: 'view',
    url: 'assets/img/nikhita-singhal-k8y9HrzonOQ-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'top',
      color: 'red'
    }
  },
  {
    id: '9',
    category: 'view',
    url: 'assets/img/pineapple-supply-co-T7h7_v4Nwao-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'top',
      color: 'red'
    }
  },
  {
    id: '10',
    category: 'view',
    url: 'assets/img/rodrigo-ruiz-rM5ZHrQvUCc-unsplash.jpg',
    tooltip_config: {
      title: 'Default text',
      placement: 'top',
      color: 'red'
    }
  }
];



// const IMAGES_MOCK = [
//   {
//     id: '1',
//     category: 'view',
//     url: 'assets/img/annie-spratt-5LD1pzFifU0-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '2',
//     category: 'view',
//     url: 'assets/img/christina-hernandez-829dmJ6DN3w-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '3',
//     category: 'view',
//     url: 'assets/img/eric-vadeboncoeur-BgUDIlnnrXg-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '4',
//     category: 'view',
//     url: 'assets/img/greg-ortega-1LCzr14Ah5U-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '5',
//     category: 'view',
//     url: 'assets/img/joseph-chan-a1MT14dlZYs-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'bottom',
//       color: 'red'
//     }
//   },
//   {
//     id: '6',
//     category: 'view',
//     url: 'assets/img/joseph-gonzalez-rp3c2RMcwgw-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '7',
//     category: 'view',
//     url: 'assets/img/lucy-heath-M01DfkOqz7I-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'right',
//       color: 'red'
//     }
//   },
//   {
//     id: '8',
//     category: 'view',
//     url: 'assets/img/nikhita-singhal-k8y9HrzonOQ-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '9',
//     category: 'view',
//     url: 'assets/img/pineapple-supply-co-T7h7_v4Nwao-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   },
//   {
//     id: '10',
//     category: 'view',
//     url: 'assets/img/rodrigo-ruiz-rM5ZHrQvUCc-unsplash.jpg',
//     tooltip_config: {
//       title: 'Default text',
//       placement: 'top',
//       color: 'red'
//     }
//   }
// ];

