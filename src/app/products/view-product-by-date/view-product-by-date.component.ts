import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-by-date',
  templateUrl: './view-product-by-date.component.html',
  styleUrls: ['./view-product-by-date.component.css']
})
export class ViewProductByDateComponent implements OnInit {
  searchDate = '';

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(data => {
      
      this.searchDate = data.date;
    });
  }

}
