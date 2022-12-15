import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ConductoresPage } from './conductores.page';

import { ConductoresPageRoutingModule } from './conductores-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresPageRoutingModule
  ],
  declarations: [ConductoresPage]
})
export class ConductoresPageModule {}
