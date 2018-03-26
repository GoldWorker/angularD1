import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs';

@Injectable()
export class HeroService {

  constructor() {}

  getHeroes() : Observable < Hero[] > {
return Observable.of(HEROES);
  }

}
