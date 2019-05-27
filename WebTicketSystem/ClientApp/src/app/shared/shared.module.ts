import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuccessDialogComponent, ErrorDialogComponent]
})
export class SharedModule { }
