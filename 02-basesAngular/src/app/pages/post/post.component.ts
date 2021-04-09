import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../services/postService/post.service';
import { Post } from '../../interfaces/post.interfaces';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit , OnDestroy {

  posts: any;

  constructor( private postsService: PostService) { }

  ngOnInit(): void {

    this.posts = this.postsService.getPosts()


      // .subscribe( post => {
      //   this.posts = post
      // })

  }

  ngOnDestroy() {
    console.log('Destruido')
  }

}
