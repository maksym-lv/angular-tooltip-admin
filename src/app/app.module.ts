import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ImagesEffect } from './effects/images.effect';
import { ImagesReducer } from './reducers/images.reducer';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImagesGridViewComponent } from './pages/images-grid-view/images-grid-view.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadImageModalComponent } from './components/upload-image-modal/upload-image-modal.component';
import { ImageDetailsViewComponent } from './pages/image-details-view/image-details-view.component';
import { InputUploadImageComponent } from './components/input-upload-image/input-upload-image.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ImagesGridViewComponent,
    HeaderComponent,
    UploadImageModalComponent,
    ImageDetailsViewComponent,
    InputUploadImageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      images: ImagesReducer
    }),
    EffectsModule.forRoot([ImagesEffect]),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  entryComponents: [
    UploadImageModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
