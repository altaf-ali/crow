import { NgModule } from '@angular/core';

import {
  MdToolbarModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdTableModule
  ],
  exports: [
    MdToolbarModule,
    MdTableModule
  ]
})
export class MaterialModule {}
