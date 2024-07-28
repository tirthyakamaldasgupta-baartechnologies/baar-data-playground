import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaarutilService {
  constructor() { }

  readConvert(string: string) {
    /**
     * This function reads the string format and then converts it to an array of objects.
     * @param {string} string - The input string to be converted.
     * @returns {Array} - The array of objects.
     */
    const arrayOfObjects = [];

    const rowStrings = string.split("__::__");

    for (const rowString of rowStrings) {
      if (rowString.trim() === '') {
        continue;
      }

      const object: any = {};

      const columnValueStrings = rowString.split("__$$__");

      for (const columnValueString of columnValueStrings) {
        const columnValueArray = columnValueString.split("__=__");

        const key = columnValueArray[0];
        const value = columnValueArray.length === 1 ? "" : columnValueArray[1];

        if (key !== "") {
          object[key] = value;
        }
      }

      arrayOfObjects.push(object);
    }

    return arrayOfObjects;
  };
}
