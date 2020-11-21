import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: {text: string, comments: string[]};
  newComment: string;

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    this.post.comments.push(this.newComment);
    this.newComment = "";
  }
}