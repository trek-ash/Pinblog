import {RouterModule, Routes} from '@angular/router';
import {BloginfoFormComponent} from './bloginfo/bloginfo-form/bloginfo-form.component';
import {BlogDetailFormComponent} from './bloginfo/blog-detail-form/blog-detail-form.component';
import {NgModule} from '@angular/core';
import {BloglistComponent} from './home/bloglist/bloglist.component';

const routes: Routes = [
  {path: '', component: BloglistComponent},
  { path: 'info', component: BloginfoFormComponent},
  { path: 'detail', component: BlogDetailFormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

