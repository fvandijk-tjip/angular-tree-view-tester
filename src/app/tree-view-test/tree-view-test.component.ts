import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

import { nodes } from '../nodes'

@Component({
  selector: 'app-tree-view-test',
  templateUrl: './tree-view-test.component.html',
  styleUrls: ['./tree-view-test.component.css']
})
export class TreeViewTestComponent implements OnInit {

  nodes = nodes;
  
  constructor() { }

  ngOnInit() {
  }


  options = {};
}