import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalForageService } from 'src/app/core/services/localForage.service';
import { Category } from 'src/interfaces/category.interface';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public showDrawer: boolean = false;
  public keyword: string = '';
  public product: Product = {
    name: '',
    description: '',
    gender: '',
    photo: '',
    price: 0,
    relatedCategories: '',
    sales: 0,
  };
  public productList: any = [];
  public categories: any = [];

  constructor(private localForage: LocalForageService) {}

  public async ngOnInit(): Promise<void> {
    this.productList = (await this.localForage.get('products')) || [];
    this.categories = (await this.localForage.get('categories')) || [];
  }

  public openDrawer(): void {
    this.showDrawer = true;
  }

  public async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) return;
    if (this.productList.length <= 0) {
      await this.localForage.set('products', [this.product]);
    } else {
      await this.localForage.set('products', [
        ...this.productList,
        this.product,
      ]);
    }
    this.product = {
      description: '',
      gender: '',
      name: '',
      photo: '',
      price: 0,
      relatedCategories: this.categories[0].name,
      sales: 0,
    };
    this.productList = await this.localForage.get('products');
  }
}
