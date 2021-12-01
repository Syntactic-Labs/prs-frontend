import { User } from "../user/user.class";

export class Request {
  id: number = 0;
  description: string = '';
  justification: string = '';
  rejectionReason: string = '';
  deliveryMode: string = '';
  status: string = '';
  total: string = '';
  
  userId: number = 0;
  user?: User;
  userName: string="";

  constructor() {}
}
