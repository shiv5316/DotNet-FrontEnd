import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Builtinpipes } from './builtinpipes/builtinpipes';
import { Custompipecomp } from './custompipecomp/custompipecomp';
import { Persondetails } from './persondetails/persondetails';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Builtinpipes, Custompipecomp, Persondetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PipeDemo');
}
