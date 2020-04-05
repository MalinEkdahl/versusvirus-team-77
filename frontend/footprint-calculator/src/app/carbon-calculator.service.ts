import { Injectable } from '@angular/core';
import { categoryConst } from './types/Category';
import {
  mobilityCarPerYearBefore,
  mobilityCarPerWeekAfter,
  mobilityPublicTransportPerWeekBefore,
  mobilityPublicTransportPerWeekAfter,
  whyDidyouMoveLess
} from 'src/app/types/MobilityValues';
import {
  hoursSpentInAirplane,
  daysSpentOnCruise,
  daysSpentInHotelBefore,
  daysSpentInHotelAfter
} from 'src/app/types/TravelValues';

@Injectable({
  providedIn: 'root'
})
export class CarbonCalculatorService {
  public mobilityCarPerYearBefore = mobilityCarPerYearBefore;
  public mobilityCarPerWeekAfter = mobilityCarPerWeekAfter;
  public mobilityPublicTransportPerWeekBefore = mobilityPublicTransportPerWeekBefore;
  public mobilityPublicTransportPerWeekAfter = mobilityPublicTransportPerWeekAfter;
  public whyDidyouMoveLess = whyDidyouMoveLess;

  public hoursSpentInAirplane = hoursSpentInAirplane;
  public daysSpentOnCruise = daysSpentOnCruise;
  public daysSpentInHotelBefore = daysSpentInHotelBefore;
  public daysSpentInHotelAfter = daysSpentInHotelAfter;

  public userSelection = {
    mobilityCarPerYearBefore: 0,
    mobilityCarPerWeekAfter: 0,
    mobilityPublicTransportPerWeekBefore: 0,
    mobilityPublicTransportPerWeekAfter: 0,
    whyDidyouMoveLess: 0,
    hoursSpentInAirplane: 0,
    daysSpentOnCruise: 0,
    daysSpentInHotelBefore: 0,
    daysSpentInHotelAfter: 0,
  };

  public userResults = {
    mobility: {before: 1, after: 0}
  }

  public calculateAll() {
    this.calculateMobility();
  }

  private calculateMobility() {
    this.userResults.mobility.before = this.userSelection.mobilityCarPerYearBefore * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekBefore * categoryConst.publicTransport
    this.userResults.mobility.after = this.userSelection.mobilityCarPerWeekAfter * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekAfter * categoryConst.publicTransport
  }

  constructor() { }
}
