import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, ButtonModule, DrawerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = 'inicio';
  drawerVisible = false;

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.activeSection = section;
    this.drawerVisible = false;
    setTimeout(() => this.viewportScroller.scrollToAnchor(section), 100);
  }

  @Output() onButton = new EventEmitter<void>();
}
