import { Injectable } from '@angular/core';
import { categoryConst } from './types/Category';
import {
  mobilityCarPerWeekBefore,
  mobilityCarPerWeekAfter,
  mobilityPublicTransportPerWeekBefore,
  mobilityPublicTransportPerWeekAfter,
  whyDidyouMoveLess,
} from 'src/app/types/MobilityValues';

@Injectable({
  providedIn: 'root'
})
export class CarbonCalculatorService {
  public mobilityCarPerWeekBefore = mobilityCarPerWeekBefore;
  public mobilityCarPerWeekAfter = mobilityCarPerWeekAfter;
  public mobilityPublicTransportPerWeekBefore = mobilityPublicTransportPerWeekBefore;
  public mobilityPublicTransportPerWeekAfter = mobilityPublicTransportPerWeekAfter;
  public whyDidyouMoveLess = whyDidyouMoveLess;

  public userSelection = {
    mobilityCarPerWeekBefore: 0,
    mobilityCarPerWeekAfter: 0,
    mobilityPublicTransportPerWeekBefore: 0,
    mobilityPublicTransportPerWeekAfter: 0,
    whyDidyouMoveLess: 0
  };

  public userResults = {
    mobility: {before: 1, after: 0}
  }

  public calculateAll() {
    this.calculateMobility();
  }

  private calculateMobility() {
    this.userResults.mobility.before = this.userSelection.mobilityCarPerWeekBefore * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekBefore * categoryConst.publicTransport
    this.userResults.mobility.after = this.userSelection.mobilityCarPerWeekAfter * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekAfter * categoryConst.publicTransport
  }

  constructor() { }
}
