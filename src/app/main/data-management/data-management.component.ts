import { BaseService } from './../../shared/services/base/base.service';
import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/shared/functions/utility';
import { NumberFormatStyle } from '@angular/common';

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
      isEditable: false,
    },
    {
      name: 'address',
      isEditable: true,
    },
    {
      name: 'others',
      isEditable: false,
    },
    {
      name: 'newColumnLast',
      isEditable: true
    }
  ];
  listOfData = [
    {
      id: 1,
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 1',
      newColumn: 'new Lorem impsum door set 1',
      newColumnLast: 'new Lorem impsum door set 1'
    },
    {
      id: 2,
      name: 'Edward King 2',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 2',
      newColumn: 'new Lorem impsum door set 1',
      newColumnLast: 'new Lorem impsum door set 1'
    },
    {
      id: 3,
      name: 'Edward King 3',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 3',
      newColumn: 'new Lorem impsum door set 1',
      newColumnLast: 'new Lorem impsum door set 1'
    },
    {
      id: 4,
      name: 'Edward King 4',
      age: '32',
      address: 'London, Park Lane no',
      other: 'Lorem impsum door set 4',
      newColumn: 'new Lorem impsum door set 1',
      newColumnLast: 'new Lorem impsum door set 1'
    }
  ];

  editId: number | null = null;

  constructor(private baseService: BaseService){
  }

  exportexcel(tableId: string, fileName: string): void{
    this.baseService.exportexcel(tableId, fileName);
  }

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(index: number): void {
    const newRowData: any = Utility.objKeys(this.listOfData[0]);

    this.listOfData = [
      ...this.listOfData,
      newRowData
    ];
  }

  isEdit(keyName: string): boolean{
    return this.listColoum.some(item => item.name === keyName && item.isEditable);
  }

  addColumn(event: any): void{
    this.modalInputData.title = event.target.value;
    this.modalInputData.type = 'addColumn';
  }

  ngOnInit(): void {

  }

}
