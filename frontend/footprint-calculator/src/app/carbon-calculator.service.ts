import { Injectable } from '@angular/core';
import { categoryConst } from './types/Category';
import {
  mobilityCarPerWeekBefore,
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
  public mobilityCarPerWeekBefore = mobilityCarPerWeekBefore;
  public mobilityCarPerWeekAfter = mobilityCarPerWeekAfter;
  public mobilityPublicTransportPerWeekBefore = mobilityPublicTransportPerWeekBefore;
  public mobilityPublicTransportPerWeekAfter = mobilityPublicTransportPerWeekAfter;
  public whyDidyouMoveLess = whyDidyouMoveLess;

  public hoursSpentInAirplane = hoursSpentInAirplane;
  public daysSpentOnCruise = daysSpentOnCruise;
  public daysSpentInHotelBefore = daysSpentInHotelBefore;
  public daysSpentInHotelAfter = daysSpentInHotelAfter;

  public userSelection = {
    mobilityCarPerWeekBefore: 0,
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
    mobility: {before: 1, after: 0},
    travel: {before: 1, after: 0}
  }

  public calculateAll() {
    this.calculateMobility();
  }

  private calculateMobility() {
    this.userResults.mobility.before = 52 * (this.userSelection.mobilityCarPerWeekBefore * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekBefore * categoryConst.publicTransport);
    this.userResults.mobility.after = 52 * (this.userSelection.mobilityCarPerWeekAfter * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekAfter * categoryConst.publicTransport);
  }

  private calculateTravel() {
    this.userResults.travel.before = (this.userSelection.hoursSpentInAirplane * categoryConst.airplane/2) + (this.userSelection.daysSpentOnCruise * categoryConst.cruise/2) + this.userSelection.daysSpentInHotelBefore * categoryConst.hotel
    this.userResults.travel.after = this.userSelection.daysSpentInHotelAfter * categoryConst.hotel;
  }

  constructor() { }
}
