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
  MatInputModule
} from '@angular/material';
import { CustomTooltipDirective } from './directives/custom-tooltip/custom-tooltip.directive';

const IMPORTS = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

const EXPORTS = [...IMPORTS];

@NgModule({
  declarations: [CustomTooltipDirective],
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
