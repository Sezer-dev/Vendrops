import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalForageService } from 'src/app/core/services/localForage.service';
import { Category } from 'src/interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public showDrawer: boolean = false;
  public keyword: string = '';
  public category: Category = {
    name: '',
    description: '',
    parent: '',
    photo: '',
  };
  public categories: any = [];

  constructor(private localForage: LocalForageService) {}

  public openDrawer(): void {
    this.showDrawer = true;
  }

  public async ngOnInit(): Promise<void> {
    this.categories = (await this.localForage.get('categories')) || [];
  }

  public async onSubmit(form: NgForm): Promise<any> {
    if (form.invalid) return;
    if (this.categories.length <= 0) {
      await this.localForage.set('categories', [this.category]);
    } else {
      await this.localForage.set('categories', [
        ...this.categories,
        this.category,
      ]);
    }
    this.category = {
      description: '',
      name: '',
      parent: '',
      photo: '',
    };
    this.categories = await this.localForage.get('categories');
  }
}
