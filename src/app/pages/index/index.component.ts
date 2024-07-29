import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';

import { BaarutilService } from '../../services/baarutil.service';

interface Appearance {
  name: string;
}

registerAllModules();

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    FormsModule,
    HotTableModule,
    InputSwitchModule,
    MenubarModule,
    MonacoEditorModule,
    PanelModule,
    SplitterModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  Appearances: Appearance[] | undefined;

  selectedAppearance: Appearance;

  isDarkMode = false;

  currentYear: number;

  monacoEditorOptions: any;

  data: string;

  columns: any;
  dataset: any;

  constructor(
    private _baarutilService: BaarutilService,
    private _messageService: MessageService
  ) {
    this.currentYear = new Date().getFullYear();

    this.data = '';

    this.columns = [];
    this.dataset = [];

    this.selectedAppearance = { name: 'Auto' }
  }

  ngOnInit(): void {
    this._initializemonacoEditorOptions();

    this.resetOrInitializeData();

    this._setAppearanceOptions();
    this._setSelectedAppearance();
  }

  private _setSelectedAppearance(): void {
    const linkElement = document.getElementById(
      'app-theme',
    ) as HTMLLinkElement;

    const selectedAppearance = window.localStorage.getItem("selectedAppearance");

    switch (selectedAppearance) {
      case 'Auto':
        this.selectedAppearance = { name: 'Auto' };

        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          this.selectedAppearance = { name: 'Dark' };

          linkElement.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          this.selectedAppearance = { name: 'Light' };

          linkElement.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        break;

      case 'Light':
        this.selectedAppearance = { name: 'Light' };

        linkElement.href = 'theme-light.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };

        break;

      case 'Dark':
        this.selectedAppearance = { name: 'Dark' };

        linkElement.href = 'theme-dark.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };

        break;

      default:
        this.selectedAppearance = { name: 'Auto' };

        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          linkElement.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          linkElement.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        break;
    }
  }

  toggleTheme() {
    const linkElement = document.getElementById(
      'app-theme',
    ) as HTMLLinkElement;

    switch (this.selectedAppearance.name) {
      case 'Auto':
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          this.selectedAppearance = { name: 'Auto' };

          linkElement.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          linkElement.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        window.localStorage.setItem("selectedAppearance", "Auto");

        break;

      case 'Light':
        linkElement.href = 'theme-light.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };

        window.localStorage.setItem("selectedAppearance", "Light");

        break;

      case 'Dark':
        linkElement.href = 'theme-dark.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };

        window.localStorage.setItem("selectedAppearance", "Dark");

        break;
    }
  }

  private _setAppearanceOptions(): void {
    this.Appearances = [
      { name: 'Light' },
      { name: 'Dark' },
      { name: 'Auto' },
    ];
  }

  private _initializemonacoEditorOptions(): void {
    this.monacoEditorOptions = {
      fontFamily: 'Menlo, monospace',
      fontSize: 14,
      minimap: {
        enabled: false
      },
      quickSuggestions: false,
      language: 'plaintext',
      // lineNumbers: 'off',
      parameterHints: {
        enabled: false
      },
      suggestOnTriggerCharacters: false,
      theme: this.isDarkMode ? 'vs-dark' : 'vs-light',
      wordWrap: 'on'
    };
  }

  public resetOrInitializeData(): void {
    this.columns = [];
    this.dataset = [];

    const arrayOfObjects = this._baarutilService.readConvert(this.data);

    this.dataset = arrayOfObjects;

    if (arrayOfObjects.length > 0) {
      const keys = Object.keys(arrayOfObjects[0]);

      this.columns = keys;

      this._displayMessage(
        'success',
        'Data loaded'
      );
    }
  };

  public replaceData(): void {
    const string = this._baarutilService.writeConvert(this.dataset);

    this.data = string;

    this._displayMessage(
      'success',
      'Data replaced'
    );
  }

  private _displayMessage(
    severity: 'success',
    summary: string,
    detail?: string
  ) {
    this._messageService.add({
      severity: severity,
      summary: summary,
      detail: detail ? detail : ''
    });
  }

  public copyDataToClipboard(): void {
    navigator.clipboard.writeText(this.data).then().catch(e => console.log(e));

    this._displayMessage(
      'success',
      'Copied to clipboard'
    );
  }
}
