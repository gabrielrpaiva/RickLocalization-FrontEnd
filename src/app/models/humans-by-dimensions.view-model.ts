import TravelHistoryViewModel from "./travel-history.view-model";

export default class HumansByDimensionsViewModel {
  id: number;
  idHuman: number;
  idDimension: number;
  idResponsibleForWhichHuman: number;
  idHumanResponsibleForMe: number;
  name: string;
  partnerName: string;
  dimentionName: string;

  travelHistories: Array<TravelHistoryViewModel> =
  new Array<TravelHistoryViewModel>();


  constructor(p: any) {
    this.id = p.id !== undefined ? p.id : null;
    this.idHuman = p.idHuman !== undefined ? p.idHuman : null;
    this.idDimension = p.idDimension !== undefined ? p.idDimension : null;
    this.idResponsibleForWhichHuman = p.idResponsibleForWhichHuman !== undefined ? p.idResponsibleForWhichHuman : null;
    this.idHumanResponsibleForMe = p.idHumanResponsibleForMe !== undefined ? p.idHumanResponsibleForMe : null;
    this.name = p.name !== undefined ? p.name : null;
    this.partnerName = p.partnerName !== undefined ? p.partnerName : null;
    this.travelHistories = p.travelHistories !== undefined ? p.travelHistories : null;
    this.dimentionName = p.dimentionName !== undefined ? p.dimentionName : null;
  }
}
