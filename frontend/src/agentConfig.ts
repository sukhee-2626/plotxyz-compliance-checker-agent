export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-compliance-checker-agent",
  "title": "Compliance Checker",
  "tagline": "Check your system against a compliance framework.",
  "purpose": "Compares a supplied policy and system description against GDPR, SOC2, HIPAA, PCI-DSS, or ISO27001 control lists, reporting covered and missing controls.",
  "accent": "#2dd4bf",
  "features": [
    "Control-by-control assessment",
    "Coverage score",
    "Missing-control findings"
  ],
  "limitations": [
    "The agent does not certify compliance.",
    "Coverage is based on keyword presence in supplied text."
  ],
  "fields": [
    {
      "name": "policy",
      "label": "Policy text",
      "type": "textarea",
      "rows": 9,
      "placeholder": ""
    },
    {
      "name": "system_description",
      "label": "System description",
      "type": "textarea",
      "rows": 8,
      "placeholder": ""
    },
    {
      "name": "regulation",
      "label": "Regulation (GDPR, SOC2, HIPAA, PCI-DSS, ISO27001)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "policy": "We encrypt data at rest and in transit. Access is role-based. We have an incident response plan and notify users of breaches within 72 hours.",
    "system_description": "Customer data portal with role-based access control and TLS encryption.",
    "regulation": "GDPR"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-compliance-checker-agent"
};
