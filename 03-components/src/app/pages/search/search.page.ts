import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AlbumsData } from '../../interfaces/albumsData.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: AlbumsData[] = []
  searchValue: string = ''

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getAlbums()
      .subscribe(albums => this.albums = albums)

  }

  onSearchValueChange( event ) {
    
    this.searchValue = event.detail.value

  }

}
