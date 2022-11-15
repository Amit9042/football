import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class SharedDialogService {

    constructor(private dialog: MatDialog) { }


    openDialog(component, options: MatDialogConfig) {
        Object.assign(options,
            {
                minHeight: '100%',
                height: '100%',
            })
        return this.dialog.open(component, options);
    }
}
