import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from '../shared/components/components.module';
import { DetailsComponent } from './details/details.component';
import { SetImagePipe } from '../shared/pipes/set-image.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AboutComponent,
    DetailsComponent,
    SetImagePipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  providers: [
    SetImagePipe,
  ]
})
export class PagesModule { }
