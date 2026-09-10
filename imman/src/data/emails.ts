import type {
  AnalyzedEmail,
  Campaign,
  Case,
  ForensicReport,
  IPIntelligence,
  DomainIntelligence,
  Notification,
  RecentThreat,
} from '@/types';

// ─── Demo Email Samples (raw EML text) ───────────────────────

export const DEMO_EMAIL_BEC = `From: michael.henderson@corp-financials-secure.com
To: sarah.j.wilson@targetcorp.com
Reply-To: payments@secure-wire-confirm.net
Return-Path: bounce@corp-financials-secure.com
Message-ID: <BEC20260908.4829471@corp-financials-secure.com>
Date: Mon, 08 Sep 2026 09:12:34 +0000
Subject: URGENT: Wire Transfer Authorization Required - CEO Request
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Mailer: Microsoft Outlook 16.0
Received: from mail-srv-219.secure-wire-confirm.net (219.84.12.107) by mx1.targetcorp.com
Received: from smtp-out.corp-financials-secure.com (45.142.212.91) by mail-srv-219
Received: from [192.168.1.45] (unknown) by smtp-out.corp-financials-secure.com

Dear Sarah,

I need you to process an urgent wire transfer immediately. I am in a confidential board meeting and cannot take calls. This is time-sensitive.

TRANSFER DETAILS:
Amount: $247,500.00 USD
Beneficiary: Global Trade Partners LLC
Account: 8847291056
Routing: 021000021
Bank: First National Commerce Bank
Reference: Project Meridian - Q3 Settlement

Please confirm once completed. Do not discuss this with anyone until I return.

Best regards,
Michael Henderson
Chief Executive Officer
TargetCorp International

CONFIDENTIAL: This email and any attachments are intended solely for the named recipient.`;

export const DEMO_EMAIL_PHISHING = `From: security-alert@paypa1-secure-verify.com
To: david.reynolds@example.com
Reply-To: noreply@paypa1-secure-verify.com
Return-Path: bounce@paypa1-secure-verify.com
Message-ID: <PH20260907.8821034@paypa1-secure-verify.com>
Date: Sun, 07 Sep 2026 14:33:21 +0000
Subject: Your PayPal account has been limited - Verify now
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
Received: from smtp4.bulk-mailing-infra.ru (185.220.101.45) by mx.example.com
Received: from [10.8.0.1] by smtp4.bulk-mailing-infra.ru

Dear PayPal Customer,

We have detected unusual activity on your account and have temporarily limited access.

To restore full account access, please verify your identity within 24 hours:

VERIFY MY ACCOUNT: http://paypa1-secure-verify.com/verify?token=a8f9c2e1&user=dreynolds

If you do not verify within 24 hours, your account will be permanently suspended and any pending transactions will be cancelled.

Thank you,
PayPal Security Team`;

export const DEMO_EMAIL_EXEC_IMPERSONATION = `From: ceo@targetcorp-group.net
To: hr.department@targetcorp.com
Reply-To: hr-urgent@targetcorp-group.net
Return-Path: admin@targetcorp-group.net
Message-ID: <EX20260906.3391847@targetcorp-group.net>
Date: Sat, 06 Sep 2026 11:45:00 +0000
Subject: Employee W-2 Tax Data Request - URGENT
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Received: from vps-mail-88.hostingprovider-cheap.io (91.108.4.218) by mx.targetcorp.com

Hello HR Team,

This is James Caldwell, CEO. I need all employee W-2 tax records for 2025 sent to my personal accountant by end of day today. This is for our board audit preparation.

Please send all W-2 PDFs as a ZIP file to: accountant@external-tax-firm.net

Include: full name, SSN, address, salary, and withholding information for all employees.

This must be done immediately and kept confidential. Do not use official channels.

James Caldwell
CEO, TargetCorp Group`;

export const DEMO_EMAIL_MALWARE = `From: shipping@dhl-delivery-tracking.info
To: jennifer.park@example.com
Reply-To: tracking@dhl-delivery-tracking.info
Return-Path: noreply@dhl-delivery-tracking.info  
Message-ID: <MW20260905.7710293@dhl-delivery-tracking.info>
Date: Fri, 05 Sep 2026 08:22:15 +0000
Subject: DHL Package Delivery Failed - Action Required
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----=_Part_47281"
X-Mailer: PHPMailer 6.8.0
Received: from smtp.dhl-delivery-tracking.info (103.75.214.88) by mx.example.com

------=_Part_47281
Content-Type: text/html; charset=UTF-8

Dear Customer,

Your DHL package #JD014600006251930476 could not be delivered.

Please open the attached document to reschedule your delivery.

------=_Part_47281
Content-Type: application/zip; name="DHL_Invoice_2026.zip"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="DHL_Invoice_2026.zip"

[BASE64 ENCODED PAYLOAD - REDACTED FOR SAFETY]

------=_Part_47281--`;

export const DEMO_EMAIL_CLEAN = `From: newsletter@techcrunch.com
To: subscriber@example.com
Reply-To: newsletters@techcrunch.com
Return-Path: bounce@newsletters.techcrunch.com
Message-ID: <TC20260908.1100234@newsletters.techcrunch.com>
Date: Mon, 08 Sep 2026 16:00:00 +0000
Subject: TechCrunch Daily: AI breakthroughs and startup funding
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
DKIM-Signature: v=1; a=rsa-sha256; d=techcrunch.com; s=mailer;
Received: from mail1.techcrunch.com (54.208.147.92) by mx.example.com with TLS

Today's top stories in technology...`;

// ─── Analyzed Emails ────────────────────────────────────────

export const ANALYZED_BEC_EMAIL: AnalyzedEmail = {
  id: 'em-2026-00481',
  raw: DEMO_EMAIL_BEC,
  header: {
    from: 'Michael Henderson <michael.henderson@corp-financials-secure.com>',
    returnPath: 'bounce@corp-financials-secure.com',
    replyTo: 'payments@secure-wire-confirm.net',
    messageId: '<BEC20260908.4829471@corp-financials-secure.com>',
    date: '2026-09-08T09:12:34Z',
    subject: 'URGENT: Wire Transfer Authorization Required - CEO Request',
    to: 'Sarah Wilson <sarah.j.wilson@targetcorp.com>',
    xMailer: 'Microsoft Outlook 16.0',
    contentType: 'text/html; charset=UTF-8',
    mimeVersion: '1.0',
    receivedHeaders: [
      'from mail-srv-219.secure-wire-confirm.net (219.84.12.107) by mx1.targetcorp.com; Mon, 08 Sep 2026 09:12:45 +0000',
      'from smtp-out.corp-financials-secure.com (45.142.212.91) by mail-srv-219.secure-wire-confirm.net; Mon, 08 Sep 2026 09:12:38 +0000',
      'from [192.168.1.45] (unknown) by smtp-out.corp-financials-secure.com; Mon, 08 Sep 2026 09:12:35 +0000',
    ],
  },
  authentication: {
    spf: {
      status: 'fail',
      domain: 'corp-financials-secure.com',
      ip: '45.142.212.91',
      detail: 'SPF record for corp-financials-secure.com does not authorize 45.142.212.91. The sending IP is not listed in the domain\'s SPF record.',
      rawRecord: 'v=spf1 include:_spf.google.com ~all',
    },
    dkim: {
      status: 'fail',
      selector: 'default',
      domain: 'corp-financials-secure.com',
      detail: 'No valid DKIM signature found. The message body and headers have not been cryptographically signed by the claimed sending domain.',
    },
    dmarc: {
      status: 'fail',
      policy: 'none',
      alignment: 'relaxed',
      detail: 'DMARC evaluation failed. Neither SPF nor DKIM produced an aligned pass. Policy is p=none — no enforcement action taken by recipient MTA.',
      reportTo: 'dmarc@corp-financials-secure.com',
    },
    alignment: {
      spfDmarc: false,
      dkimDmarc: false,
    },
  },
  relayPath: [
    {
      id: 'hop-1',
      ip: '192.168.1.45',
      hostname: 'unknown-origin',
      timestamp: '2026-09-08T09:12:35Z',
      country: 'Unknown',
      countryCode: 'XX',
      city: 'Unknown',
      provider: 'Private Network',
      asn: 'AS0',
      riskLevel: 'unknown',
      delay: '0ms',
      protocol: 'SMTP',
    },
    {
      id: 'hop-2',
      ip: '45.142.212.91',
      hostname: 'smtp-out.corp-financials-secure.com',
      timestamp: '2026-09-08T09:12:38Z',
      country: 'Netherlands',
      countryCode: 'NL',
      city: 'Amsterdam',
      provider: 'Hostinger International',
      asn: 'AS47583',
      riskLevel: 'critical',
      delay: '3s',
      protocol: 'SMTP/TLS',
    },
    {
      id: 'hop-3',
      ip: '219.84.12.107',
      hostname: 'mail-srv-219.secure-wire-confirm.net',
      timestamp: '2026-09-08T09:12:38Z',
      country: 'Malaysia',
      countryCode: 'MY',
      city: 'Kuala Lumpur',
      provider: 'TM Net Sdn Bhd',
      asn: 'AS4788',
      riskLevel: 'high',
      delay: '7s',
      protocol: 'SMTP/TLS',
    },
    {
      id: 'hop-4',
      ip: '198.51.100.42',
      hostname: 'mx1.targetcorp.com',
      timestamp: '2026-09-08T09:12:45Z',
      country: 'United States',
      countryCode: 'US',
      city: 'New York',
      provider: 'Cloudflare, Inc.',
      asn: 'AS13335',
      riskLevel: 'safe',
      delay: '7s',
      protocol: 'SMTP/TLS',
    },
  ],
  attachments: [],
  urls: [
    {
      id: 'url-1',
      url: 'https://secure-wire-confirm.net/payment-portal',
      domain: 'secure-wire-confirm.net',
      isHttps: true,
      redirectCount: 3,
      finalDestination: 'http://185.220.101.22/harvest/form.php',
      domainAge: '14 days',
      reputation: 'critical',
      credentialHarvestingRisk: 'critical',
      categories: ['Financial Fraud', 'Credential Harvesting', 'Newly Registered'],
      expanded: false,
    },
  ],
  threatScore: 94,
  threatType: 'bec',
  confidence: 96,
  classification: 'Business Email Compromise — Wire Fraud',
  detectionReasons: [
    {
      id: 'dr-1',
      indicator: 'SPF Authentication Failure',
      severity: 'critical',
      explanation: 'Sending IP 45.142.212.91 is not authorized to send on behalf of corp-financials-secure.com',
      category: 'authentication',
    },
    {
      id: 'dr-2',
      indicator: 'DKIM Signature Missing',
      severity: 'critical',
      explanation: 'No cryptographic signature found — message integrity cannot be verified',
      category: 'authentication',
    },
    {
      id: 'dr-3',
      indicator: 'Domain Impersonation (Typosquat)',
      severity: 'critical',
      explanation: 'corp-financials-secure.com is a lookalike for the legitimate domain targetcorp-finance.com',
      category: 'domain',
    },
    {
      id: 'dr-4',
      indicator: 'Payment Diversion Request',
      severity: 'critical',
      explanation: 'Email requests urgent wire transfer of $247,500 — classic BEC wire fraud pattern',
      category: 'behavioral',
    },
    {
      id: 'dr-5',
      indicator: 'Reply-To Mismatch',
      severity: 'high',
      explanation: 'Reply-To header points to a different domain (secure-wire-confirm.net) than the From address',
      category: 'authentication',
    },
    {
      id: 'dr-6',
      indicator: 'Urgency & Authority Manipulation',
      severity: 'high',
      explanation: 'CEO impersonation with explicit urgency ("URGENT"), authority claim, and secrecy instruction',
      category: 'behavioral',
    },
    {
      id: 'dr-7',
      indicator: 'Newly Registered Domain Infrastructure',
      severity: 'high',
      explanation: 'corp-financials-secure.com registered 14 days ago — consistent with BEC campaign infrastructure',
      category: 'infrastructure',
    },
    {
      id: 'dr-8',
      indicator: 'Suspicious Relay Path — Multi-Country',
      severity: 'medium',
      explanation: 'Email routed through Netherlands and Malaysia before reaching target — inconsistent with claimed US-based sender',
      category: 'infrastructure',
    },
  ],
  aiAssessment: {
    classification: 'Business Email Compromise (BEC) — Wire Fraud',
    confidence: 96,
    reasoning: 'This email exhibits the hallmark characteristics of a Business Email Compromise attack targeting financial personnel. The threat actor has registered a lookalike domain (corp-financials-secure.com vs. the legitimate targetcorp-finance.com) and is impersonating the CEO to pressure the finance department into an unauthorized wire transfer. Authentication failures across SPF, DKIM, and DMARC confirm the message did not originate from the claimed domain. The infrastructure was provisioned in the Netherlands 14 days ago and routes through Malaysia, inconsistent with a US executive\'s mail server. The language pattern — urgency, authority, financial request, secrecy — matches 94% of confirmed BEC wire fraud cases in our threat database. This email matches 7 confirmed incidents in the "Operation Silent Invoice" campaign.',
    behavioralSignals: [
      'Urgency Manipulation',
      'CEO/Executive Authority Impersonation',
      'Financial Wire Request',
      'Secrecy Instruction',
      'Isolation Tactic ("cannot take calls")',
      'Social Engineering',
    ],
    attackVector: 'Email-based financial fraud via domain impersonation',
    mitreTechniques: ['T1566.002', 'T1078', 'T1560'],
  },
  domainIntelligence: {
    domain: 'corp-financials-secure.com',
    registeredDomain: 'corp-financials-secure.com',
    similarity: 84,
    legitimateDomain: 'targetcorp-finance.com',
    typosquatType: 'Keyword Insertion',
    changedChars: [],
    age: '14 days',
    registered: '2026-08-25',
    registrar: 'NameSilo LLC',
    nameservers: ['ns1.hostinger.com', 'ns2.hostinger.com'],
    mxRecords: ['mail.corp-financials-secure.com'],
    dnsStatus: 'Active',
    hasSsl: true,
    sslIssuer: "Let's Encrypt",
    riskLevel: 'critical',
    categories: ['Newly Registered', 'Financial Fraud', 'Domain Impersonation'],
    firstSeen: '2026-08-25T00:00:00Z',
    lastSeen: '2026-09-08T09:12:38Z',
    relatedCampaigns: ['camp-001'],
    reputation: {
      score: 8,
      sources: ['VirusTotal Equivalent', 'OpenPhish Mock', 'URLhaus Mock'],
      flagged: true,
    },
  },
  originIntelligence: {
    ip: '45.142.212.91',
    riskLevel: 'critical',
    country: 'Netherlands',
    countryCode: 'NL',
    region: 'North Holland',
    city: 'Amsterdam',
    isp: 'Hostinger International Ltd',
    asn: 'AS47583',
    asnOrg: 'Hostinger International Ltd',
    hostingProvider: 'Hostinger',
    isProxy: false,
    isVpn: true,
    isTor: false,
    isHosting: true,
    confidence: 87,
    firstSeen: '2026-08-26T12:00:00Z',
    lastSeen: '2026-09-08T09:12:38Z',
    relatedDomains: ['corp-financials-secure.com', 'secure-wire-confirm.net', 'payroll-verify-portal.com'],
    relatedCampaigns: ['camp-001'],
    historicalIncidents: 12,
    lat: 52.3676,
    lon: 4.9041,
    attributionNote: 'Geolocation identifies network infrastructure associated with this IP. It does not establish the physical location or identity of the threat actor.',
  },
  evidenceItems: [
    {
      id: 'ev-item-1',
      evidenceId: 'EV-2026-00481',
      type: 'email',
      description: 'Original email message with full headers',
      sha256: 'a3f8c2e1d94b7f6e2c8a1b4d9e3f7c2a5b8d1e4f7a2c9b6e3d8f1a4c7b2e9d6',
      collectedAt: '2026-09-08T09:15:00Z',
      collectedBy: 'Auto-Analysis Engine',
      status: 'reported',
      integrityVerified: true,
      emailId: 'em-2026-00481',
    },
    {
      id: 'ev-item-2',
      evidenceId: 'EV-2026-00482',
      type: 'header',
      description: 'Extracted email headers — authentication chain',
      sha256: 'b4e9d1c8f3a7e2b6d9c4f1a8e3b7d2c9f4a1e8b5d2c9f6a3e8b1d4c7f2a9e6',
      collectedAt: '2026-09-08T09:15:02Z',
      collectedBy: 'Header Analysis Module',
      status: 'reported',
      integrityVerified: true,
      emailId: 'em-2026-00481',
    },
    {
      id: 'ev-item-3',
      evidenceId: 'EV-2026-00483',
      type: 'ip',
      description: 'Originating IP 45.142.212.91 intelligence snapshot',
      sha256: 'c5f1a4e9d2b8c7f3a6e1b4d9c2f7a3e8b5d1c8f4a7e2b9d4c1f8a5e2b6d9c3',
      collectedAt: '2026-09-08T09:15:05Z',
      collectedBy: 'IP Intelligence Module',
      status: 'reported',
      integrityVerified: true,
      emailId: 'em-2026-00481',
    },
    {
      id: 'ev-item-4',
      evidenceId: 'EV-2026-00484',
      type: 'domain',
      description: 'Domain intelligence report — corp-financials-secure.com',
      sha256: 'd6a2b5e1c9f4a8d3b7e2c6f9a1e4b8d3c7f2a5e9b1d6c3f8a2e7b4d1c9f6a3',
      collectedAt: '2026-09-08T09:15:08Z',
      collectedBy: 'Domain Intelligence Module',
      status: 'reported',
      integrityVerified: true,
      emailId: 'em-2026-00481',
    },
  ],
  analyzedAt: '2026-09-08T09:15:12Z',
  caseId: 'case-2026-0047',
  campaignId: 'camp-001',
};

// ─── Recent Threats ──────────────────────────────────────────

export const RECENT_THREATS: RecentThreat[] = [
  {
    id: 'rt-1',
    risk: 'critical',
    sender: 'michael.henderson@corp-financials-secure.com',
    subject: 'URGENT: Wire Transfer Authorization Required - CEO Request',
    threatType: 'bec',
    source: '45.142.212.91 (NL)',
    detected: '2026-09-08T09:15:12Z',
    status: 'investigating',
    emailId: 'em-2026-00481',
  },
  {
    id: 'rt-2',
    risk: 'critical',
    sender: 'security-alert@paypa1-secure-verify.com',
    subject: 'Your PayPal account has been limited - Verify now',
    threatType: 'phishing',
    source: '185.220.101.45 (RU)',
    detected: '2026-09-07T14:35:00Z',
    status: 'contained',
    emailId: 'em-2026-00472',
  },
  {
    id: 'rt-3',
    risk: 'critical',
    sender: 'ceo@targetcorp-group.net',
    subject: 'Employee W-2 Tax Data Request - URGENT',
    threatType: 'impersonation',
    source: '91.108.4.218 (RU)',
    detected: '2026-09-06T11:47:00Z',
    status: 'resolved',
    emailId: 'em-2026-00463',
  },
  {
    id: 'rt-4',
    risk: 'high',
    sender: 'shipping@dhl-delivery-tracking.info',
    subject: 'DHL Package Delivery Failed - Action Required',
    threatType: 'malware',
    source: '103.75.214.88 (HK)',
    detected: '2026-09-05T08:24:00Z',
    status: 'contained',
    emailId: 'em-2026-00455',
  },
  {
    id: 'rt-5',
    risk: 'high',
    sender: 'support@microsofft-account.com',
    subject: 'Unusual sign-in activity detected on your account',
    threatType: 'phishing',
    source: '194.165.16.29 (UA)',
    detected: '2026-09-05T06:11:00Z',
    status: 'new',
    emailId: 'em-2026-00452',
  },
  {
    id: 'rt-6',
    risk: 'medium',
    sender: 'hr-benefits@targetcorp-benef1ts.com',
    subject: 'Open Enrollment Period Ends Friday — Update Your Benefits',
    threatType: 'suspicious',
    source: '77.234.41.18 (PL)',
    detected: '2026-09-04T13:22:00Z',
    status: 'new',
    emailId: 'em-2026-00448',
  },
  {
    id: 'rt-7',
    risk: 'safe',
    sender: 'newsletter@techcrunch.com',
    subject: 'TechCrunch Daily: AI breakthroughs and startup funding',
    threatType: 'clean',
    source: '54.208.147.92 (US)',
    detected: '2026-09-08T16:00:00Z',
    status: 'resolved',
    emailId: 'em-2026-00480',
  },
];

// ─── Demo Samples for Analyzer ───────────────────────────────

export const DEMO_SAMPLES = [
  {
    id: 'bec',
    label: 'BEC Wire Fraud',
    description: 'CEO impersonation → urgent wire transfer request',
    risk: 'critical' as const,
    emailId: 'em-2026-00481',
    raw: DEMO_EMAIL_BEC,
  },
  {
    id: 'phishing',
    label: 'Credential Phishing',
    description: 'PayPal lookalike → credential harvesting page',
    risk: 'critical' as const,
    emailId: 'em-2026-00472',
    raw: DEMO_EMAIL_PHISHING,
  },
  {
    id: 'impersonation',
    label: 'Executive Impersonation',
    description: 'CEO domain spoof → W-2 tax data exfiltration',
    risk: 'critical' as const,
    emailId: 'em-2026-00463',
    raw: DEMO_EMAIL_EXEC_IMPERSONATION,
  },
  {
    id: 'malware',
    label: 'Malware Delivery',
    description: 'Fake shipping notification → ZIP payload',
    risk: 'high' as const,
    emailId: 'em-2026-00455',
    raw: DEMO_EMAIL_MALWARE,
  },
  {
    id: 'clean',
    label: 'Legitimate Email',
    description: 'TechCrunch newsletter — authenticated, safe',
    risk: 'safe' as const,
    emailId: 'em-2026-00480',
    raw: DEMO_EMAIL_CLEAN,
  },
];
