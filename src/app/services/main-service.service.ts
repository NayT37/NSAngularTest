import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

private _name: string;

  constructor() {
    this._name = "Freddy";
  }

  public getName(): string {
    return this._name;
  }
}
