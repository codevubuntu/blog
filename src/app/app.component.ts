import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
	title = 'blog';
	posts = [new Post("Un", "Ok"), new Post("Deux", "No"), new Post("Trois", "Yes") ] ;
}

class Post{
	title: string ;
	content: string ;
	loveIts: number ;
	created_at: Date ;
	
	constructor(title: string, content: string){
		this.title = title ;
		this.content = content ;
		this.loveIts = 0 ;
		this.created_at = new Date() ;
	}

}
