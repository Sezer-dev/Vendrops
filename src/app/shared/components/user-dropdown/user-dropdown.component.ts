import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent {
  public showDropdown: boolean = false;
  constructor() {}

  public showDropdownChange(): void {
    this.showDropdown = !this.showDropdown;
  }
}
