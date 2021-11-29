export class Request {
  id: number = 0;
  description: string = '';
  justification: string = '';
  rejectionReason: string = '';
  deliveryMode: string = '';
  status: string = '';
  total: string = '';
  userId: number = 0;

  constructor(
    id: number,
    description: string,
    justification: string,
    rejectionreason: string,
    deliverymode: string,
    status: string,
    total: string,
    userid: number
  ) {
    this.id = id;
    this.description = description;
    this.justification = justification;
    this.rejectionReason = rejectionreason;
    this.deliveryMode = deliverymode;
    this.status = status;
    this.total = total;
    this.userId = userid;
  }
}
