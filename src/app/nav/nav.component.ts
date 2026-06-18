import { Component, HostListener, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuOpen = false;
  scrolledPastHero = false;

  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolledPastHero = window.scrollY > window.innerHeight;
  }

  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
  }
}
