import { Component } from '@angular/core';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title:string="Trending Movies"

  Movies = MOVIES;

  searchText:string='';

  search(){
    if(this.searchText == "" || this.searchText == null){
      this.Movies = MOVIES;
    }else{
      this.Movies = MOVIES;
      this.Movies = this.Movies.filter(movie => movie.movieTitle?.startsWith(this.searchText.toLowerCase()));
    }
  }

  reset(){
    this.searchText = "";
    this.Movies = MOVIES;
  }


}
