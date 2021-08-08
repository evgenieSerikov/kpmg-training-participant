import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    a { margin-right: 10px; color: white; }
    .layout-container { display: flex; flex-direction: column; min-height: 100vh; }
    .layout-content { padding: 0 10px; }
    .nav-container { display: flex; align-items: center; width: 100%; height: 60px; background-color: mediumblue; color: white; }
  `]
})
export class LayoutComponent {
}
