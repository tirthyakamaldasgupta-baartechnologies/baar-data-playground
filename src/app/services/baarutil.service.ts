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

  writeConvert(arrayOfObjects: Array<Object>) {
    /**
     * This function reads an array of objects and converts it to a string format.
     * @param {Array<Object>} arrayOfObjects - The array of objects to be converted.
     * @returns {string} - The string format of the input list.
     */
    let string = "";

    arrayOfObjects.forEach(dict => {
      for (const [key, value] of Object.entries(dict)) {
        string += `${key}__=__${value}__$$__`;
      }

      string = string.slice(0, -6);

      string += "__::__";
    });

    string = string.slice(0, -6);

    return string;
  }

}
