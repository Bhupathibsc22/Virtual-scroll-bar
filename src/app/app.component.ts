import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScrollingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {

  }

  index = 80;
  title = 'sample-scroll';
  handleScroll(event: any) {
    if (event !== 0 && event % 20 === 0) {
      this.index += event / 10;
      this.getData();

    }
    console.log(event);
  }

  items: any = [];
  // // Array.from({ length: 20 }).map((_, i) =>{

  //   return {name:`Item #${i}`};
  // } );
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpClient.get("https://api.publicapis.org/entries").subscribe((res: any) => {
      this.items = [...this.items, ...res.entries.slice(0, this.index)];
    })
  }
}
