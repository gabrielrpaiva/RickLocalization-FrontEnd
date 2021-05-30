export default class TravelHistoryViewModel {
  idHumansByDimensions: number;
  idTargetDimension: number;
  travelDate: Date;

  constructor(p: any) {
    this.idHumansByDimensions = p.idHumansByDimensions !== undefined ? p.idHumansByDimensions : null;
    this.idTargetDimension = p.idTargetDimension !== undefined ? p.idTargetDimension : null;
    this.travelDate = p.travelDate !== undefined ? p.travelDate : null;
  }
}
