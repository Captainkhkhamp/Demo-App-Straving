import { Pipe, PipeTransform } from '@angular/core';
import { Clubhome } from 'src/app/clubhome';

@Pipe({
  name: 'mod'
})
export class ModPipe implements PipeTransform {

  transform(Home: Clubhome[], searchValue: string): Clubhome[] {
    
    if (!Home || !searchValue){
    return Home;
    }
    return Home.filter(Clubhome =>
      Clubhome.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Clubhome.City.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Clubhome.State.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Clubhome.MoblieNo.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Clubhome.Pincode.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }
}
