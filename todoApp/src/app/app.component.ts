import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user="Umut Polat";
  items= [
    {description: "Kahvaltı", action: "No"},
    {description: "Sinama", action: "Yes"},
    {description: "Ders Çalışma", action: "No"},
    {description: "Yüzme", action: "Yes"},
  ];
}
