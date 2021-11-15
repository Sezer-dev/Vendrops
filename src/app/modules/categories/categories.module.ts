import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CategoriesRoutingModule, FormsModule, SharedModule],
})
export class CategoriesModule {}
