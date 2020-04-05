import { Injectable } from '@angular/core';
import { categoryConst, Category } from './types/Category';
import {
  mobilityCarPerYearBefore,
  mobilityCarPerWeekAfter,
  mobilityPublicTransportPerWeekBefore,
  mobilityPublicTransportPerWeekAfter,
  whyDidyouMoveLess,
} from 'src/app/types/MobilityValues';

@Injectable({
  providedIn: 'root'
})
export class CarbonCalculatorService {
  public mobilityCarPerYearBefore = mobilityCarPerYearBefore;
  public mobilityCarPerWeekAfter = mobilityCarPerWeekAfter;
  public mobilityPublicTransportPerWeekBefore = mobilityPublicTransportPerWeekBefore;
  public mobilityPublicTransportPerWeekAfter = mobilityPublicTransportPerWeekAfter;
  public whyDidyouMoveLess = whyDidyouMoveLess;

  public userSelection = {
    mobilityCarPerYearBefore: 0,
    mobilityCarPerWeekAfter: 0,
    mobilityPublicTransportPerWeekBefore: 0,
    mobilityPublicTransportPerWeekAfter: 0,
    whyDidyouMoveLess: 0
  };

  public userResults = {
    mobility: {before: 100, after: 400}
  }
  
  /**
   * @param category The category of the C02 emitter
   * @param beforeInput The value before crisis (km, ...)
   * @param afterInput The value after crisis (km, ...)
   * @return delta of carbon emission
   */
  carbonDeltaCalculation(category: Category, beforeInput: number, afterInput: number) {
    const deltaEmission = this.carbonCalculation(category, beforeInput) - this.carbonCalculation(category, afterInput)
    return deltaEmission;
  }
  
  /**
   * @param category The category of the vehicle
   * @param input
   * @return carbon emission
   */
  carbonCalculation(category: Category, input: number) {
    return input * categoryConst[category];
  }

  constructor() { }
}
