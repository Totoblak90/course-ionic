import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../interfaces/post.interfaces';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {


  @Input() post!: Post;
  @Output() mensajeID: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  sendID() {
    this.mensajeID.emit( this.mensajeID.id )
  }

}
