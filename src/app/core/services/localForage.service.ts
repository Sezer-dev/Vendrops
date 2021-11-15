import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class LocalForageService {
  constructor() {
    localforage.config({
      name: 'App Storage',
    });
  }

  get(key: string): Promise<void | null> {
    return localforage.getItem(key);
  }

  set(key: string, value: any): Promise<any> {
    return localforage.setItem(key, value);
  }

  remove(key: string): Promise<void> {
    return localforage.removeItem(key);
  }

  DELETE_ALL(): Promise<void> {
    return localforage.clear();
  }

  listKeys(): Promise<string[]> {
    return localforage.keys();
  }
}
