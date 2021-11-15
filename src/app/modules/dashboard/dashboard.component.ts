import { Component, OnInit } from '@angular/core';
import { LocalForageService } from 'src/app/core/services/localForage.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public view: [number, number] = [700, 300];
  public productsData: any;
  public chartData: any;

  constructor(private localForage: LocalForageService) {}

  public async ngOnInit(): Promise<void> {
    this.productsData = await this.localForage.get('products');
    this.chartData = this.productsData.map((product: Product) => {
      return {
        name: product.relatedCategories,
        value: product.sales * product.price,
      };
    });
  }
}
