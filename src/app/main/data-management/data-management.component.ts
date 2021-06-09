import { BaseService } from './../../shared/services/base/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit {
  modalInputData: any = {};
  listColoum = [
    {
      name: 'id',
      isEditable: false,
    },
    {
      name: 'name',
      isEditable: true,
    },
    {
      name: 'age',
      isEditable: true,
    },
    {
      name: 'address',
      isEditable: false,
    },
    {
      name: 'others',
      isEditable: false,
    }
  ];
  listOfData = [
    {
      id: 1,
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 1'
    },
    {
      id: 2,
      name: 'Edward King 2',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 2'
    },
    {
      id: 3,
      name: 'Edward King 3',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 3'
    },
    {
      id: 4,
      name: 'Edward King 4',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 4'
    }
  ];
  editId: number | null = null;


  constructor(private baseService: BaseService){
  }

  exportexcel(tableId: string, fileName: string): void{
    this.baseService.exportexcel(tableId, fileName);
  }

  checkForEdit(name: string): boolean | any{
    let output;
    for (const item of this.listColoum){
      if (item.name === name && item.isEditable){
        output = true;
      } else {
        output = false;
      }
    }
  }

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(index: number): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: index + 2,
        name: 'add new',
        age: '32',
        address: 'London, Park Lane no.',
        other: 'add new lorem'
      }
    ];
  }

  addColumn(event: any): void{
    this.modalInputData.title = event.target.value;
    this.modalInputData.type = 'addColumn';
  }

  ngOnInit(): void {

  }

}
