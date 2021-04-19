import { Pipe, PipeTransform } from '@angular/core';
import { AlbumsData } from '../../interfaces/albumsData.interface';
import { HeroesData } from '../../interfaces/heroesData.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( data: any[], searchedValue: string, column: string ): any[] {

    if (searchedValue === '') {
      return data;
    }

    searchedValue.toLocaleLowerCase()
    const search = data.filter(d => {
      return d[column].toLocaleLowerCase().includes(searchedValue)
     })
    return search
  }

}
