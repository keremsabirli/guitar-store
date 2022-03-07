import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserOverlayOpen = false;
  isCartOverlayOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  onUserClicked() {
    this.isUserOverlayOpen = !this.isUserOverlayOpen;
  }

  onCartClicked() {
    this.isCartOverlayOpen = !this.isCartOverlayOpen;
  }

}
