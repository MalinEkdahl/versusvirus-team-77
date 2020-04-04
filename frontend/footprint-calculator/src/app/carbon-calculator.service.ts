import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonCalculatorService {
  // TODO: constants are not correct now
  constant = {
    [Category.BENZIN]: 4,
    [Category.DIESEL]: 5,
    [Category.TRAIN]: 2,
    [Category.FOOD]: 1,
    [Category.TRAVELLING]: 1,
  }
  
  /**
   * @param category The category of the C02 emitter
   * @param beforeInput The value before crisis (km, ...)
   * @param afterInput The value after crisis (km, ...)
   * @return delta of carbon emission
   */
  carbonDeltaCalculation(category: Category = Category.BENZIN, beforeInput: number, afterInput: number) {
    const deltaEmission = this.carbonCalculation(category, beforeInput) - this.carbonCalculation(category, afterInput)
    return deltaEmission;
  }
  
  /**
   * @param category The category of the vehicle
   * @param input
   * @return carbon emission
   */
  carbonCalculation(category: Category = Category.BENZIN, input: number) {
    return input * this.constant[category];
  }

  constructor() { }
}

/**
 * Category of the CO2 emitter
 */
export enum Category {
  BENZIN,
  DIESEL,
  TRAIN,
  FOOD,
  TRAVELLING
}
