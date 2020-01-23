import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { UploadImageModalComponent } from '../upload-image-modal/upload-image-modal.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerTitle: string = 'Grid Gallery';
  routeHome: string = '/gallery';
  isUploadImageAllowed: boolean = true;

  private subscription: Subscription;

  constructor(private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((e: NavigationEnd) => e.url)
    ).subscribe((url) => {
      this.headerTitle = (url.indexOf(this.routeHome) >= -1) ? 'Grid Gallery' : 'Return to Gallery';
      this.isUploadImageAllowed = (url.indexOf(this.routeHome) >= -1);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onUploadImage(): void {
    this.modalService.openModal(UploadImageModalComponent);
  }
}
