export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Converted"
  | "Rejected";

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone: string;
  status: LeadStatus;
}

export interface UpdateLeadStatusRequest {
  status: LeadStatus;
}