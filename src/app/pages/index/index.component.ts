import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    MenubarModule,
    MonacoEditorModule,
    SplitterModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  editorOptions = {
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

  code: string = '';
}
