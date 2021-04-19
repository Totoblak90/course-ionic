import { Component, OnInit } from '@angular/core';
import { HeroesData } from 'src/app/interfaces/heroesData.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  segmentValues: string[] = ["All", "DC Comics", "Marvel Comics"]
  superheroes: HeroesData[] = [];
  publisher: string = ''

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    
    this.dataService.getHeroes()
      .subscribe(heroes => this.superheroes = heroes)

  }

  segmentChanged( event ){

    if (event.detail.value === "All") {
      return this.publisher = ""
    }
    this.publisher = event.detail.value

    // let filteredHeroes;

    // if (event.detail.value === this.segmentValues[1]) {
    //   filteredHeroes = this.superheroes
    //   filteredHeroes = this.superheroes.filter(hero => {
    //     return hero.publisher.includes(this.segmentValues[1])
    //   })
    // } else if (event.detail.value === this.segmentValues[2]) {
    //   filteredHeroes = this.superheroes
    //   filteredHeroes = this.superheroes.filter(hero => {
    //     return hero.publisher.includes(this.segmentValues[2])
    //   })
    // }

    // console.log(filteredHeroes)
    // return this.superheroes = filteredHeroes
  }

}
