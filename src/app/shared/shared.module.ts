import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CustomTooltipDirective } from './directives/custom-tooltip/custom-tooltip.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

const IMPORTS = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
];

const EXPORTS = [...IMPORTS];

@NgModule({
  declarations: [
    CustomTooltipDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IMPORTS
  ],
  exports: [
    EXPORTS,
    BrowserAnimationsModule,
    CustomTooltipDirective,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
