import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { LayoutComponent }     from './layout/layout.component';
import { TrainingTwoModule }   from './views/training-two/training-two.module';
import { TrainingThreeModule } from './views/training-three/training-three.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrainingTwoModule,
    TrainingThreeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
