import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'home',
        children:[
          {
            path: '',
            loadChildren:() => import('../home/home.module').then(m=>m.HomePageModule)
          }
        ]
      },
      {
        path:'estab',
        children:[
          {
            path: '',
            loadChildren:() => import('../estab/estab.module').then(m=>m.EstabPageModule)
          }
        ]
      },
      {
        path:'noticias',
        children:[
          {
            path: '',
            loadChildren:() => import('../noticias/noticias.module').then(m=>m.NoticiasPageModule)
          }
        ]
      },
      {
        path:'conta',
        children:[
          {
            path: '',
            loadChildren:() => import('../conta/conta.module').then(m=>m.ContaPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'tabs/home',
        pathMatch:'full'
        }
      
    ]
  },
  {
    path:'',
    redirectTo: 'tabs/home',
    pathMatch:'full'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
