import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
<<<<<<< HEAD
    console.log('Adding article: ' + title.value + ' and link: ' + link.value);
=======
    console.log('ee ${title.value}');
>>>>>>> afc3c153c9e744c8e094f06bbdc0b207209408e7
    return false;
  }
}
