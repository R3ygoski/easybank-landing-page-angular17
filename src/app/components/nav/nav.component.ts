import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isVisible: boolean = false
  isDesktop: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize($event: any): void {
    this.checkWindowSize()
  }

  ngOnInit(){
    this.checkWindowSize()
  }
  checkWindowSize(){
    this.isDesktop = window.innerWidth > 1023
  }

  menuToggle(): void {
    this.isVisible = !this.isVisible
  }
}
