import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';
import { CustomTooltipDirective } from './directives/custom-tooltip/custom-tooltip.directive';


const IMPORTS = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule
];

const EXPORTS = [...IMPORTS];

@NgModule({
  declarations: [CustomTooltipDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IMPORTS
  ],
  exports: [
    EXPORTS,
    CustomTooltipDirective
  ]
})
export class SharedModule { }
