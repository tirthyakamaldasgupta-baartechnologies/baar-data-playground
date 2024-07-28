import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';

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
export class IndexComponent {
  menloEditorOptions = {
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

  data: string = '';

  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street', a: 'b' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
  ];
}
