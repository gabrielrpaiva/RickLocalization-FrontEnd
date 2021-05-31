export default class TravelHistoryViewModel {
  idHumansByDimensions: number;
  idTargetDimension: number;
  travelDate: Date;
  dimensionName: string;

  constructor(p: any) {
    this.idHumansByDimensions = p.idHumansByDimensions !== undefined ? p.idHumansByDimensions : null;
    this.idTargetDimension = p.idTargetDimension !== undefined ? p.idTargetDimension : null;
    this.travelDate = p.travelDate !== undefined ? p.travelDate : null;
    this.dimensionName = p.dimensionName !== undefined ? p.dimensionName : null;
  }
}
