import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextareaModule,
    MenubarModule,
    SplitterModule,
    TableModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
