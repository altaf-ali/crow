import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdToolbarModule,
  MdTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdTableModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdTableModule
  ]
})
export class MaterialModule {}
