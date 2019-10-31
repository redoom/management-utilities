import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  productsData: DataSet[] = [];
  newhire : number;
  constructor() { }

  ngOnInit() {
    this.newhire = 0;
    const product1old = new Data("SR-3000", 105, 70, 45.02, 12000, 50000, 8913, 500, 9000);
    const product1new = new Data("SR-3000", 105, 70, 45.02, 12000, 50000, 0, 0, 0);
    const product1 = new DataSet(product1old, product1new)
    this.productsData.push(product1);

    const product2old = new Data("SR-3450", 145, 85, 32.02, 3000, 10000, 12913, 342, 12900);
    const product2new = new Data("SR-3450", 145, 85, 32.02, 3000, 10000, 0, 0, 0);
    const product2 = new DataSet(product2old, product2new)
    this.productsData.push(product2);

    const product3old = new Data("SR-4300", 224, 170, 55.52, 18000, 64000, 7913, 765, 8000);
    const product3new = new Data("SR-4300", 224, 170, 55.52, 18000, 64000, 0, 0, 0);
    const product3 = new DataSet(product3old, product3new)
    this.productsData.push(product3);

    const product4old = new Data("SR-4900", 94, 71, 37.02, 8000, 30000, 18913, 23, 19000);
    const product4new = new Data("SR-4900", 94, 71, 37.02, 8000, 30000, 0, 0, 0);
    const product4 = new DataSet(product4old, product4new)
    this.productsData.push(product4);
  }
}

class DataSet {
  constructor(public oldData: Data, public newData: Data) {
    
  }
}

class Data {
  constructor(public name: string, public price: number, public producePrice: number, public priceIndex: number, public quality: number, public marketing: number, public sales: number, public inventory: number, public order: number) {
    
  }
}
