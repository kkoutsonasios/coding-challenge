import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button'
import {MatListModule } from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';



const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }
