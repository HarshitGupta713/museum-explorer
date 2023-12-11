import { Component, OnInit } from '@angular/core';
import { ExhibitService } from '../exhibit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public title: string = 'HARSHIT'
  public exhibits!: any[]; // Change the type based on the actual structure of exhibit data

  constructor(private exhibitService: ExhibitService) { }

  ngOnInit(): void {
    this.exhibitService.getAllExhibits().subscribe((exhibits) => {
      this.exhibits = exhibits;
    });
  }
}
