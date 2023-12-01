import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.scss'
})
export class FetchComponent implements OnInit {
  detailsList: any[] = [];
  userId!: string;
  selectedDetail: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

  getAllDetails() {
    this.dataService.getAllDetails().subscribe(
      details => {
        this.detailsList = details;
      },
      error => {
        console.error(error);
      }
    );
  }

  getDetailsById() {
    this.dataService.getDetailsById(this.userId).subscribe(
      detail => {
        this.selectedDetail = detail;
      },
      error => {
        console.error(error);
      }
    );
  }
}
 
