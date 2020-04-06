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
import { LogApiService } from './log-api.service';

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
    this.calculateTravel();

    this.logApi.log({date: new Date(), result: this.userResults, unit: "kg/year"});
  }

  private calculateMobility() {
    this.userResults.mobility.before = 52 * (this.userSelection.mobilityCarPerWeekBefore * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekBefore * categoryConst.publicTransport);
    this.userResults.mobility.after = 52 * (this.userSelection.mobilityCarPerWeekAfter * categoryConst.car + this.userSelection.mobilityPublicTransportPerWeekAfter * categoryConst.publicTransport);
    this.userResults.mobility.before /= 1000; // fix calculation of grams to kilograms
    this.userResults.mobility.after /= 1000; // fix calculation of grams to kilograms
  }

  private calculateTravel() {
    const lockdown = new Date(2020, 2, 16);
    const today = new Date();
    const daysGoneBy = (today.getTime() - lockdown.getTime()) / (1000 * 3600 * 24);
    this.userResults.travel.before = (this.userSelection.hoursSpentInAirplane * categoryConst.airplane/2) + (this.userSelection.daysSpentOnCruise * categoryConst.cruise/2) + this.userSelection.daysSpentInHotelBefore * categoryConst.hotel;
    this.userResults.travel.after = 365 * (this.userSelection.daysSpentInHotelAfter * categoryConst.hotel / daysGoneBy);
    this.userResults.travel.before /= 1000; // fix calculation of grams to kilograms
    this.userResults.travel.after /= 1000; // fix calculation of grams to kilograms
  }

  constructor(private logApi: LogApiService) { }
}
