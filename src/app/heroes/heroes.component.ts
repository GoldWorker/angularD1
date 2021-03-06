import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({selector: 'app-heroes', templateUrl: './heroes.component.html', styleUrls: ['./heroes.component.css']})
export class HeroesComponent implements OnInit {

  constructor(private heroService : HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  //list data
  heroes : Hero[];

  //
  selectedHero : Hero;

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

  // getHeroes() : void {   this.heroes = this     .heroService     .getHeroes();
  // }

  getHeroes() : void {
    this
      .heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
