export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  status: Status;
  googleId?: string;
  phone?: string;
  bio?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  lat?: number;
  lng?: number;
  role: Role;
  //   companiesOwned?: Company[];
  //   companyMembership?: CompanyMember[];
  //   agent?: Agent;

  //   bookmarks?: Bookmark[];
  //   reviews?: Review[];

  //   sentMessages?;
  //   receivedMessages?;

  //   status?: Status;
    emailVerified?: boolean;
    emailVerifiedAt?: Date;

  //   passwordChangedAt?: Date;

  //   lastLoginAt?: Date;
    provider?: Provider;
}

export type Role = "USER" | "AGENT" | "ADMIN";
export type CompanyRole = "ADMIN" | "MEMBER";
export type ListingType = "FOR_SALE" | "FOR_RENT";
export type PropertyType =
  | "APARTMENT"
  | "LAND"
  | "COMMERCIAL"
  | "HOUSE"
  | "VILLA"
  | "TOWNHOUSE";
export type PropertyCondition = "NEW" | "GOOD" | "RENOVATION";

export type ApplicationAction =
  | "CREATED"
  | "SUBMITTED"
  | "APPROVED"
  | "REJECTED"
  | "UPDATED"
  | "DOCUMENT_UPLOADED"
  | "DOCUMENT_DELETED"
  | "DELETE_APPLICATION"
  | "DOCUMENT_VERIFIED";

export type ApplicationStatus =
  | "DRAFT"
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
export type Status = "ACTIVE" | "SUSPENDED" | "DEACTIVATED";
export type ListingStatus = "DRAFT" | "ACTIVE" | "DEACTIVATED";
export type ReviewDecision = "APPROVED" | "REJECTED";

export type InviteStatus = "PENDING" | "ACCEPTED" | "EXPIRED" | "REVOKED";

export type AgentDocumentType = "ID_CARD" | "LICENSE" | "SELFIE";

export type AgentSpecialization =
  | "RESIDENTIAL"
  | "COMMERCIAL"
  | "LUXURY"
  | "STUDENT"
  | "SHORTLET"
  | "LAND";

export type CompanyDocumentType = "CERTIFICATE" | "LICENSE" | "OWNER_ID";

export type ListingMediaType = "IMAGE" | "VIDEO";

export type Provider = "LOCAL" | "GOOGLE" | "APPLE";

export interface FilterOptions {
  page?: number;
  limit?: number;
  search?: string;
  type?: ListingType;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
}

export interface Agent {
  id: string;
  userId: string;
  user: User;
  companyId: string;
  company: Company;
  avgRating: number;
  totalReviews: number;
  status: Status;
  isVerified: boolean;
  listings: Listing[];
  createdAt: Date;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  logo: CompanyLogo;
  website: string;
  ownerId: string;
  owner: User;
  agents: Agent[];
  members: CompanyMember[];
  listings: Listing[];
  status: Status;
  invites: Invite[];
  createdAt: Date;
}

export interface CompanyLogo {
  id: string;
  url: string;
  publicId: string;
  companyId: string;
  company: Company;
  createdAt: Date;
  deleteddAt: Date;
}

export interface CompanyMember {
  id: string;
  userId: string;
  user: User;
  companyId: string;
  company: Company;
  role: CompanyRole;
  status: Status;
  createdAt: Date;
}

export interface Listing {
  id: string;
  agentId: string;
  agent: Agent;
  companyId: string;
  company: Company;
  title: string;
  description: string;
  price: number;
  currency: string;
  type: PropertyType;
  listingType: ListingType;
  condition: PropertyCondition;
  bedrooms: number;
  bathrooms: number;
  areaSize: number;
  areaUnit: string;
  lotsize: number;
  yearBuilt: number;
  media: Media[];
  reviews: Review[];
  bookmarks: Bookmark[];
  address: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  status: ListingStatus;
  history: History;
  uploadedAt: Date;
}

export interface Media {
  id: string;
  type: ListingMediaType;
  url: string;
  publicId: string;
  listingId: string;
  listing: Listing;
  createdAt: Date;
  deletedAt: Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  listingId: string;
  user: User;
  listing: Listing;
  createdAt: Date;
  deletedAt: Date;
}
export interface Review {
  id: string;
  userId: string;
  listingId: string;
  user: User;
  listing: Listing;
  createdAt: Date;
  deletedAt: Date;
}

export interface AgentApplication {
  id: string;
  userId: string;
  user: User;
  status: ApplicationStatus;
  currentStep: number;
  submittedAt: Date;
  reviewedAt: Date;
  approvedAt: Date;
  rejectedAt: Date;
  professional: AgentProfessional;
  documents: AgentDocument[];
  reviews: AgentApplicationReview[];
  verification: AgentApplicationVerification;
  history: AgentApplicationHistory;
  createdAt: Date;
}

export interface AgentProfessional {
  id: string;
  agentApplicationId: string;
  agentApplication: AgentApplication;
  licenseNumber: string;
  licenseCountry: string;
  specialization: AgentSpecialization;
  yearsExperience: number;
  companyName: string;
  website: string;
  createdAt: Date;
}
export interface AgentDocument {
  id: string;
  agentApplicationId: string;
  agentApplication: AgentApplication;
  type: AgentDocumentType;
  url: string;
  publicId: string;
  isVerified: boolean;
  createdAt: Date;
}
export interface AgentApplicationReview {
  id: string;
  agentApplicationId: string;
  agentApplication: AgentApplication;
  reviewerId: string;
  reviewer: User;
  decision: ReviewDecision;
  notes: string;
  reason: string;
  createdAt: Date;
}

export interface AgentApplicationHistory {
  id: string;
  agentApplicationId: string;
  agentApplication: AgentApplication;
  action: ApplicationAction;
  performedById: string;
  performedBy: User;
  note: string;
  createdAt: Date;
}

export interface AgentApplicationVerification {
  id: string;
  agentApplicationId: string;
  agentApplication: AgentApplication;
  ipHash: string;
  userAgent: string;
  riskScore: number;
  isVerified: boolean;
  createdAt: Date;
}

export interface CompanyApplication {
  id: string;
  userId: string;
  user: User;
  status: ApplicationStatus;
  currentStep: number;
  submittedAt: Date;
  reviewedAt: Date;
  approvedAt: Date;
  rejectedAt: Date;
  comapanyInfo: CompanyInfo;
  documents: CompanyDocument[];
  adminReviews: CompanyApplicationReview[];
  verification: CompanyApplicationVerification;
  history: CompanyApplicationHistory;
  createdAt: Date;
}

export interface CompanyInfo {
  id: string;
  companyApplicationId: string;
  companyApplication: CompanyApplication;
  name: string;
  email: string;
  logo: CompanyLogo;
  website: string;
  address: string;
  type: string; // TODO: change to enum here and in prisma schema
  registrationNumber: string;
  licenseNumber: string;
}

export interface CompanyDocument {
  id: string;
  companyApplicationId: string;
  companyApplication: CompanyApplication;
  type: CompanyDocumentType;
  url: string;
  publicId: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface CompanyApplicationReview {
  id: string;
  companyApplicationId: string;
  companyApplication: CompanyApplication;
  reviewerId: string;
  reviewer: User;
  decision: ReviewDecision;
  notes: string;
  reason: string;
  createdAt: Date;
}

export interface CompanyApplicationVerification {
  id: string;
  companyApplicationId: string;
  companyApplication: CompanyApplication;
  ipHash: string;
  userCompany: string;
  riskScore: number;
  isVerified: boolean;
  createdAt: Date;
}

export interface CompanyApplicationHistory {
  id: string;
  companyApplicationId: string;
  companyApplication: CompanyApplication;
  action: ApplicationAction;
  performedById: string;
  performedBy: User;
  note: string;
  createdAt: Date;
}


export interface Invite {
  id: string;
  email: string;
  companyId: string;
  company: Company;
  role: CompanyRole;
  invitedById: string;
  invitedBy: CompanyMember;
  status: InviteStatus;
  createdAt: Date;
  acceptedAt: Date;
  revokedAt: Date;
  revokedById: string;
  rovokedBy: CompanyMember;
  expiresAt: Date;
}