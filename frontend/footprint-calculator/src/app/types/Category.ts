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

export const categoryConst = {
  [Category.BENZIN]: 1,
  [Category.DIESEL]: 2,
  [Category.TRAIN]: 3,
  [Category.FOOD]: 4,
  [Category.TRAVELLING]: 5 
}