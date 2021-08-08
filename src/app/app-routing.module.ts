import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { TrainingTwoComponent }   from './views/training-two/training-two.component';
import { TrainingThreeComponent } from './views/training-three/training-three.component';
import { LayoutComponent }        from './layout/layout.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'training-two', pathMatch: 'full'},
      {path: 'training-two', component: TrainingTwoComponent},
      {path: 'training-three', component: TrainingThreeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
