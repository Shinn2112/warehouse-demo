import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('warehouse-demo');
}
