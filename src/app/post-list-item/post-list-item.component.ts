import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() tit : string ;
  @Input() cnt : string ;
  @Input() dt : Date ;
  @Input() lik : number ;
  constructor() { }

  ngOnInit() {
  }

  like(){
	this.lik = this.lik+1 ;
  }

  dislike(){
  	this.lik = this.lik-1 ;
  }

}
