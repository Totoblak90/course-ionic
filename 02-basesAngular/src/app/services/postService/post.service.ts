import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

import { Post } from 'src/app/interfaces/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( 
    private http: HttpClient 
  ) { }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap( console.log )
      )

  }
}
