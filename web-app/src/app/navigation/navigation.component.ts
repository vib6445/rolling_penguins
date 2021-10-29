import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  current_title = this.titleService.getTitle();
  constructor(private titleService: Title) {}
  setDocTitle(title: string) {
    //document.getElementById('current-title')?.innerHTML 
    this.current_title = title;
    this.titleService.setTitle(title);
 }

  ngOnInit(): void {
  }

}
