import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { BaarutilService } from '../../services/baarutil.service';

registerAllModules();

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    HotTableModule,
    MenubarModule,
    MonacoEditorModule,
    SplitterModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  menloEditorOptions: any;

  data: string;

  columns: any;
  dataset: any;

  constructor(private _baarutilService: BaarutilService) {
    this.data = '';

    this.columns = [];
    this.dataset = [];
  }

  ngOnInit(): void {
    this._initializeMenloEditorOptions();

    this.initializeData();
  }

  private _initializeMenloEditorOptions(): void {
    this.menloEditorOptions = {
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      minimap: {
        enabled: false
      },
      quickSuggestions: false,
      language: 'plaintext',
      lineNumbers: 'off',
      parameterHints: {
        enabled: false
      },
      suggestOnTriggerCharacters: false,
      theme: 'vs-light',
      wordWrap: 'on'
    };
  }

  public initializeData(): void {
    const arrayOfObjects = this._baarutilService.readConvert(this.data);

    if (arrayOfObjects.length > 0) {
      this.dataset = arrayOfObjects;
      
      const keys = Object.keys(arrayOfObjects[0]);

      this.columns = keys;
    }
  };
}
