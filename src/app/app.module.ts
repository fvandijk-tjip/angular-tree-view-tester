import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TreeModule} from 'angular-tree-component';
import { TreeViewTestComponent } from './tree-view-test/tree-view-test.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, TreeModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, TreeViewTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
