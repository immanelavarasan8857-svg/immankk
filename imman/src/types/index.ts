// ============================================================
// Core Domain Types for Email Threat Intelligence Platform
// ============================================================

export type RiskLevel = 'critical' | 'high' | 'medium' | 'low' | 'safe' | 'unknown';
export type ThreatType = 'phishing' | 'bec' | 'impersonation' | 'malware' | 'spoofing' | 'fraud' | 'suspicious' | 'clean';
export type AuthStatus = 'pass' | 'fail' | 'softfail' | 'neutral' | 'none' | 'unknown';
export type CaseStatus = 'new' | 'investigating' | 'contained' | 'resolved' | 'archived';
export type AnalysisStatus = 'idle' | 'analyzing' | 'complete' | 'error';

// ─── Email ───────────────────────────────────────────────────

export interface EmailHeader {
  from: string;
  returnPath: string;
  replyTo: string;
  messageId: string;
  date: string;
  subject: string;
  to: string;
  xMailer?: string;
  contentType?: string;
  mimeVersion?: string;
  receivedHeaders: string[];
  rawHeaders?: string;
}

export interface AuthenticationResult {
  spf: {
    status: AuthStatus;
    domain: string;
    ip: string;
    detail: string;
    rawRecord?: string;
  };
  dkim: {
    status: AuthStatus;
    selector: string;
    domain: string;
    detail: string;
    headerFields?: string[];
  };
  dmarc: {
    status: AuthStatus;
    policy: string;
    alignment: 'strict' | 'relaxed' | 'none';
    detail: string;
    reportTo?: string;
  };
  arc?: {
    status: AuthStatus;
    detail: string;
  };
  alignment: {
    spfDmarc: boolean;
    dkimDmarc: boolean;
  };
}

export interface RelayHop {
  id: string;
  ip: string;
  hostname: string;
  timestamp: string;
  country: string;
  countryCode: string;
  city: string;
  provider: string;
  asn: string;
  riskLevel: RiskLevel;
  delay?: string;
  protocol?: string;
}

export interface EmailAttachment {
  id: string;
  filename: string;
  mimeType: string;
  size: number;
  sha256: string;
  riskLevel: RiskLevel;
  indicators: string[];
  detectedType?: string;
}

export interface AnalyzedEmail {
  id: string;
  raw: string;
  header: EmailHeader;
  authentication: AuthenticationResult;
  relayPath: RelayHop[];
  attachments: EmailAttachment[];
  urls: AnalyzedURL[];
  threatScore: number;
  threatType: ThreatType;
  confidence: number;
  classification: string;
  detectionReasons: DetectionReason[];
  aiAssessment: AIAssessment;
  domainIntelligence: DomainIntelligence;
  originIntelligence: IPIntelligence;
  evidenceItems: EvidenceItem[];
  analyzedAt: string;
  caseId?: string;
  campaignId?: string;
}

export interface DetectionReason {
  id: string;
  indicator: string;
  severity: RiskLevel;
  explanation: string;
  category: 'authentication' | 'domain' | 'content' | 'infrastructure' | 'behavioral' | 'url';
  icon?: string;
}

export interface AIAssessment {
  classification: string;
  confidence: number;
  reasoning: string;
  behavioralSignals: string[];
  attackVector: string;
  mitreTechniques?: string[];
}

// ─── Domain / URL ─────────────────────────────────────────────

export interface DomainIntelligence {
  domain: string;
  registeredDomain: string;
  similarity?: number;
  legitimateDomain?: string;
  typosquatType?: string;
  changedChars?: Array<{ pos: number; original: string; detected: string }>;
  age: string;
  registered: string;
  expires?: string;
  registrar: string;
  nameservers: string[];
  mxRecords: string[];
  dnsStatus: string;
  hasSsl: boolean;
  sslIssuer?: string;
  riskLevel: RiskLevel;
  categories: string[];
  firstSeen: string;
  lastSeen: string;
  relatedCampaigns?: string[];
  reputation: {
    score: number;
    sources: string[];
    flagged: boolean;
  };
}

export interface AnalyzedURL {
  id: string;
  url: string;
  domain: string;
  isHttps: boolean;
  redirectCount: number;
  finalDestination: string;
  domainAge: string;
  reputation: RiskLevel;
  credentialHarvestingRisk: RiskLevel;
  categories: string[];
  screenshotUrl?: string;
  expanded: boolean;
}

// ─── IP Intelligence ─────────────────────────────────────────

export interface IPIntelligence {
  ip: string;
  riskLevel: RiskLevel;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  isp: string;
  asn: string;
  asnOrg: string;
  hostingProvider: string;
  isProxy: boolean;
  isVpn: boolean;
  isTor: boolean;
  isHosting: boolean;
  confidence: number;
  firstSeen: string;
  lastSeen: string;
  relatedDomains: string[];
  relatedCampaigns: string[];
  historicalIncidents: number;
  lat: number;
  lon: number;
  attributionNote: string;
}

// ─── Campaign ─────────────────────────────────────────────────

export interface Campaign {
  id: string;
  name: string;
  threatType: ThreatType;
  description: string;
  emailCount: number;
  domainCount: number;
  ipCount: number;
  victimCount: number;
  countries: string[];
  confidence: number;
  firstSeen: string;
  lastSeen: string;
  status: 'active' | 'dormant' | 'dismantled';
  timeline: CampaignTimelineEvent[];
  relatedEmails: string[];
  relatedDomains: string[];
  relatedIPs: string[];
  tactics: string[];
  iocs: IOC[];
  geographicDistribution: Array<{ country: string; count: number; lat: number; lon: number }>;
}

export interface CampaignTimelineEvent {
  id: string;
  date: string;
  event: string;
  description: string;
  type: 'infrastructure' | 'attack' | 'detection' | 'expansion' | 'intelligence';
}

// ─── Case ────────────────────────────────────────────────────

export interface Case {
  id: string;
  title: string;
  severity: RiskLevel;
  threatType: ThreatType;
  assignedAnalyst: string;
  status: CaseStatus;
  createdAt: string;
  updatedAt: string;
  emailId?: string;
  campaignId?: string;
  description: string;
  tags: string[];
}

// ─── Evidence ─────────────────────────────────────────────────

export interface EvidenceItem {
  id: string;
  evidenceId: string;
  type: 'email' | 'attachment' | 'url' | 'ip' | 'domain' | 'header' | 'screenshot';
  description: string;
  sha256: string;
  collectedAt: string;
  collectedBy: string;
  status: 'collected' | 'hashed' | 'analyzed' | 'correlated' | 'reported';
  integrityVerified: boolean;
  emailId?: string;
}

// ─── IOC ─────────────────────────────────────────────────────

export interface IOC {
  id: string;
  type: 'ip' | 'domain' | 'url' | 'email' | 'hash' | 'subject';
  value: string;
  riskLevel: RiskLevel;
  firstSeen: string;
  lastSeen: string;
  campaigns?: string[];
  description?: string;
}

// ─── Report ──────────────────────────────────────────────────

export interface ForensicReport {
  id: string;
  title: string;
  emailId: string;
  generatedAt: string;
  generatedBy: string;
  executiveSummary: string;
  riskScore: number;
  classification: ThreatType;
  sections: ReportSection[];
  status: 'draft' | 'final' | 'archived';
  exportedFormats: ('pdf' | 'json' | 'html')[];
}

export interface ReportSection {
  id: string;
  title: string;
  content: string;
  data?: Record<string, unknown>;
}

// ─── Notification ─────────────────────────────────────────────

export interface Notification {
  id: string;
  title: string;
  message: string;
  severity: RiskLevel;
  timestamp: string;
  read: boolean;
  type: 'threat' | 'system' | 'campaign' | 'case';
  link?: string;
}

// ─── Search ──────────────────────────────────────────────────

export interface SearchResult {
  id: string;
  type: 'case' | 'email' | 'domain' | 'ip' | 'url' | 'campaign' | 'report';
  title: string;
  subtitle: string;
  riskLevel?: RiskLevel;
  timestamp?: string;
}

// ─── Graph ───────────────────────────────────────────────────

export interface GraphNode {
  id: string;
  type: 'email' | 'domain' | 'ip' | 'url' | 'campaign' | 'threat-actor' | 'hosting';
  label: string;
  data: Record<string, unknown>;
  riskLevel?: RiskLevel;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?: string;
}

// ─── Dashboard ───────────────────────────────────────────────

export interface ThreatMetric {
  label: string;
  value: number;
  change: number;
  changeDirection: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ThreatDistribution {
  name: string;
  value: number;
  color: string;
}

export interface RecentThreat {
  id: string;
  risk: RiskLevel;
  sender: string;
  subject: string;
  threatType: ThreatType;
  source: string;
  detected: string;
  status: 'new' | 'investigating' | 'contained' | 'resolved';
  emailId: string;
}
