import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  onRouterLink_1() {
    this.router.navigate(['/searh-images']);
  } 
  onRouterLink_2() {
    this.router.navigate(['/photos','2']);
  } 
  onRouterLink_3() {
    this.router.navigate(['/photos','3']);
  } 
  onRouterLink_4() {
    this.router.navigate(['/photos','4']);
  } 

  onRouterLink_5() {
    this.router.navigate(['/photos','5']);
  } 
  onRouterLink_6() {
    this.router.navigate(['/photos','6']);
  } 

}
