import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    MenubarModule,
    MonacoEditorModule,
    SplitterModule,
    TableModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  editorOptions = {
    minimap: {
      enabled: false
    },
    language: 'javascript',
    lineNumbers: 'off',
    theme: 'vs-light',
    wordWrap: 'on'
  };

  code: string = '';
}
