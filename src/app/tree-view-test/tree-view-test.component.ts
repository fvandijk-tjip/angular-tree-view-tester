import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app-tree-view-test',
  templateUrl: './tree-view-test.component.html',
  styleUrls: ['./tree-view-test.component.css']
})
export class TreeViewTestComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
}