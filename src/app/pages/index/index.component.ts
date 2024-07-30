import { Component, HostListener, OnInit } from '@angular/core';
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
  private _appThemeLinkElement: HTMLLinkElement | undefined;

  public appearances: Appearance[] | undefined;

  public selectedAppearance: Appearance;

  private _isDarkMode = false;

  public splitterLayout!: string;
  public splitterPanelSizes!: Array<number>;

  public currentYear: number;

  public monacoEditorOptions: any;

  public data: string;

  public columns: any;
  public dataset: any;

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
    this._initializeMonacoEditorOptions();

    this.resetOrInitializeData();

    this._setSplitterAttributes();

    this._setAppearanceOptions();

    this._appThemeLinkElement = document.getElementById('app-theme') as HTMLLinkElement;

    this._setSelectedAppearance();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth < 767.98) {
      this.splitterLayout = 'vertical';
    } else {
      this.splitterPanelSizes = [35, 65];
      this.splitterLayout = 'horizontal';
    }
  }

  private _setSplitterAttributes(): void {
    if (window.innerWidth < 767.98) {
      this.splitterPanelSizes = [50, 50];
      this.splitterLayout = 'vertical';
    } else {
      this.splitterPanelSizes = [35, 65];
      this.splitterLayout = 'horizontal';
    }
  }

  private _setSelectedAppearance(): void {
    const selectedAppearance = window.localStorage.getItem("selectedAppearance");

    switch (selectedAppearance) {
      case 'Auto':
        this.selectedAppearance = { name: 'Auto' };

        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          this.selectedAppearance = { name: 'Dark' };

          this._appThemeLinkElement!.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          this.selectedAppearance = { name: 'Light' };

          this._appThemeLinkElement!.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        break;

      case 'Light':
        this.selectedAppearance = { name: 'Light' };

        this._appThemeLinkElement!.href = 'theme-light.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };

        break;

      case 'Dark':
        this.selectedAppearance = { name: 'Dark' };

        this._appThemeLinkElement!.href = 'theme-dark.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };

        break;

      default:
        this.selectedAppearance = { name: 'Auto' };

        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          this._appThemeLinkElement!.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          this._appThemeLinkElement!.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        break;
    }
  }

  toggleTheme() {
    switch (this.selectedAppearance.name) {
      case 'Auto':
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
          this.selectedAppearance = { name: 'Auto' };

          this._appThemeLinkElement!.href = 'theme-dark.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };
        } else {
          this._appThemeLinkElement!.href = 'theme-light.css';

          this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };
        }

        window.localStorage.setItem("selectedAppearance", "Auto");

        break;

      case 'Light':
        this._appThemeLinkElement!.href = 'theme-light.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-light' };

        window.localStorage.setItem("selectedAppearance", "Light");

        break;

      case 'Dark':
        this._appThemeLinkElement!.href = 'theme-dark.css';

        this.monacoEditorOptions = { ...this.monacoEditorOptions, theme: 'vs-dark' };

        window.localStorage.setItem("selectedAppearance", "Dark");

        break;
    }
  }

  private _setAppearanceOptions(): void {
    this.appearances = [
      { name: 'Light' },
      { name: 'Dark' },
      { name: 'Auto' },
    ];
  }

  private _initializeMonacoEditorOptions(): void {
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
      theme: this._isDarkMode ? 'vs-dark' : 'vs-light',
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
