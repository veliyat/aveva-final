import { NgModule } from '@angular/core';
import { MatSnackBarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {

}