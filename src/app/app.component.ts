import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'auth-demo-app';
  loader: boolean;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    const loader$ = this.helperService.loader.subscribe((value: boolean) => {
      this.loader = value;
    });
  }
}
