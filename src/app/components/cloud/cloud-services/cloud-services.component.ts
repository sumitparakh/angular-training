import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../../core/cloud/cloud.service';

@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.scss'],
})
export class CloudServicesComponent implements OnInit {
  cloudData: any = {};
  constructor(private cloud: CloudService) {}

  ngOnInit(): void {
    this.cloudData = this.cloud.getCloudData();
  }
}
