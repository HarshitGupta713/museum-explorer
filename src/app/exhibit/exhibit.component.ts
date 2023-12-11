import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExhibitService } from '../exhibit.service';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.scss'],
})
export class ExhibitComponent implements OnInit {
  exhibit: any;

  constructor(
    private route: ActivatedRoute,
    private exhibitService: ExhibitService
  ) { }

  ngOnInit(): void {
    const exhibitId: any = this.route.snapshot.paramMap.get('id');
    this.exhibitService.getExhibitById(exhibitId).subscribe((exhibit) => {
      this.exhibit = exhibit;
    });
  }
}
