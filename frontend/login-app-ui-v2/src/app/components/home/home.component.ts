import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeApiService} from '../../services/api/home-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: string;

  constructor(
    private route: ActivatedRoute,
    private homeApiService: HomeApiService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
  }

  getWelcomeMessageWithParameter() {

  }
}
