import TravelHistoryViewModel from "./travel-history.view-model";

export default class HumansByDimensionsViewModel {
  idHuman: number;
  idDimension: number;
  idResponsibleForWhichHuman: number;
  idHumanResponsibleForMe: number;
  name: string;
  partnerName: string;

  travelHistoryViewModel: Array<TravelHistoryViewModel> =
  new Array<TravelHistoryViewModel>();


  constructor(p: any) {
    this.idHuman = p.idHuman !== undefined ? p.idHuman : null;
    this.idDimension = p.idDimension !== undefined ? p.idDimension : null;
    this.idResponsibleForWhichHuman = p.idResponsibleForWhichHuman !== undefined ? p.idResponsibleForWhichHuman : null;
    this.idHumanResponsibleForMe = p.idHumanResponsibleForMe !== undefined ? p.idHumanResponsibleForMe : null;

    this.name = p.name !== undefined ? p.name : null;
    this.partnerName = p.partnerName !== undefined ? p.partnerName : null;
    this.travelHistoryViewModel = p.travelHistoryViewModel !== undefined ? p.travelHistoryViewModel : null;
  }
}
