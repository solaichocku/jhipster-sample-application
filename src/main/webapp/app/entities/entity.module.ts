import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Welcome2CpRegionModule } from './region/region.module';
import { Welcome2CpCountryModule } from './country/country.module';
import { Welcome2CpLocationModule } from './location/location.module';
import { Welcome2CpDepartmentModule } from './department/department.module';
import { Welcome2CpTaskModule } from './task/task.module';
import { Welcome2CpEmployeeModule } from './employee/employee.module';
import { Welcome2CpJobModule } from './job/job.module';
import { Welcome2CpJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Welcome2CpRegionModule,
        Welcome2CpCountryModule,
        Welcome2CpLocationModule,
        Welcome2CpDepartmentModule,
        Welcome2CpTaskModule,
        Welcome2CpEmployeeModule,
        Welcome2CpJobModule,
        Welcome2CpJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Welcome2CpEntityModule {}
