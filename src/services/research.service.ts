import { apiClient } from '@/lib/api';

export interface ResearchRequest {
  query: string;
  country: string;
  language: string;
}

export interface ResearchJob {
  id: string;
  user: string;
  query: string;
  country: string;
  language: string;
  status: string;
  created_at: string;
  completed_at: string | null;
}

export interface OpportunityScore {
  id: string;
  demand_score: number;
  trend_score: number;
  serp_score: number;
  competition_score: number;
  monetization_score: number;
  buildability_score: number;
  expansion_score: number;
  overall_score: number;
  recommendation: string;
  created_at: string;
}

export interface KeywordData {
  id: string;
  term: string;
  search_volume: number | null;
  cpc: number | null;
  intent: string;
  competition: number | null;
  cluster: string;
  created_at: string;
  research: string;
}

export interface TrendData {
  id: string;
  date: string;
  interest_score: number;
  direction: string;
  keyword: string;
  created_at: string;
  research: string;
}

export interface SERPResult {
  id: string;
  position: number;
  title: string;
  url: string;
  domain: string;
  snippet: string;
  result_type: string;
  opportunity_flag: boolean;
  created_at: string;
  research: string;
}

export interface WebsiteAudit {
  id: string;
  performance_score: number;
  seo_score: number;
  accessibility_score: number;
  best_practices_score: number;
  load_time_ms: number;
  ux_signals: Record<string, unknown>;
  created_at: string;
}

export interface CompetitorPage {
  url: string;
  page_title: string;
  audit: WebsiteAudit | null;
}

export interface Competitor {
  id: string;
  domain: string;
  name: string;
  authority_score: number | null;
  estimated_traffic: number | null;
  pages: CompetitorPage[];
  technologies: string[];
}

export const researchService = {
  async startResearch(data: ResearchRequest): Promise<ResearchJob> {
    return apiClient<ResearchJob>('/research/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async getResearchStatus(id: string): Promise<ResearchJob> {
    return apiClient<ResearchJob>(`/research/${id}/`);
  },

  async getScore(id: string): Promise<OpportunityScore> {
    return apiClient<OpportunityScore>(`/research/${id}/score/`);
  },

  async getKeywords(id: string): Promise<KeywordData[]> {
    const response = await apiClient<any>(`/research/${id}/keywords/`);
    return response.results ? response.results : response;
  },

  async getTrends(id: string): Promise<TrendData[]> {
    return apiClient<TrendData[]>(`/research/${id}/trends/`);
  },

  async getSERP(id: string): Promise<SERPResult[]> {
    return apiClient<SERPResult[]>(`/research/${id}/serp/`);
  },

  async getCompetitors(id: string): Promise<Competitor[]> {
    return apiClient<Competitor[]>(`/research/${id}/competitors/`);
  },

  async getAudits(id: string): Promise<WebsiteAudit[]> {
    return apiClient<WebsiteAudit[]>(`/research/${id}/audit/`);
  },

  async getResearchHistory(): Promise<ResearchJob[]> {
    const response = await apiClient<any>('/research/');
    return response.results ? response.results : response;
  },
};