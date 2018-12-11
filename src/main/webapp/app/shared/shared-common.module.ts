import { NgModule } from '@angular/core';

import { Welcome2CpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Welcome2CpSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Welcome2CpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Welcome2CpSharedCommonModule {}
