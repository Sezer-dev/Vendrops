import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() showDrawer: boolean = false;
  @Output() showDrawerChange = new EventEmitter<boolean>();

  public drawerVisibility(): void {
    this.showDrawerChange.emit(!this.showDrawer);
  }
}
