import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { UploadImageModalComponent } from '../upload-image-modal/upload-image-modal.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle: string = 'Grid Gallery';
  routeHome: string = '/gallery';
  isUploadImageAllowed: boolean = true;

  constructor(private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((e: NavigationEnd) => e.url)
    ).subscribe((url) => {
      this.headerTitle = (url.indexOf(this.routeHome) > -1) ? 'Grid Gallery' : 'Return to Gallery';
      this.isUploadImageAllowed = (url.indexOf(this.routeHome) > -1);
    });
  }

  onUploadImage(): void {
    this.modalService.openModal(UploadImageModalComponent);
  }

}
