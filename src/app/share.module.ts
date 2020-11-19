import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  exports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
})
export class ShareModule {}
