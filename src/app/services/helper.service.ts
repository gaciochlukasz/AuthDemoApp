// Third-party
import { Injectable } from '@angular/core';

// Materials
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

// Enums
import { SnackBarTypeEnum } from '../enums/snack-bar-type.enum';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  loader = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar) {}

  public setLoader(value: boolean) {
    this.loader.next(value);
  }

  public openSuccessInfo(message: string): void {
    this.snackBar.open(message, '', this.setSnackBarSettings(SnackBarTypeEnum.Success));
  }

  public openErrorInfo(message: string): void {
    this.snackBar.open(message, '', this.setSnackBarSettings(SnackBarTypeEnum.Error));
  }

  private setSnackBarSettings(type: SnackBarTypeEnum): {} {
    return {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: type
    };
  }
}
