import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugService } from '../../../services/debug.service';
import { Common } from '../../../helpers/Common';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.css'],
})
export class ViewLayoutComponent implements OnInit {
  id: string;
  collector: string;
  debugDetails: any;
  collectorsList: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private debugService: DebugService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.collector = params['collector'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState(): void {
    this.debugService.getDetails(this.id).subscribe(
      response => {
        this.debugDetails = response;
        this.debugService.addNode(response);
        this.collectorsList = Common.getCollectorsList(this.debugDetails);
        if (Common.isEmpty(this.collector) && this.collectorsList.length) {
            this.collector = this.collectorsList[0];
        }
      }
    );
  }
}
