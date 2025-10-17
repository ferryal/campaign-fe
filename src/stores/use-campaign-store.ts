import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Campaign } from '@/types/campaign.types';

interface CampaignState {
  currentCampaign: Campaign | null;
  campaigns: Campaign[];
  isLoading: boolean;
  error: string | null;
  
  setCurrentCampaign: (campaign: Campaign | null) => void;
  setCampaigns: (campaigns: Campaign[]) => void;
  addCampaign: (campaign: Campaign) => void;
  updateCampaign: (id: string, updates: Partial<Campaign>) => void;
  removeCampaign: (id: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useCampaignStore = create<CampaignState>()(
  persist(
    (set) => ({
      currentCampaign: null,
      campaigns: [],
      isLoading: false,
      error: null,
      
      setCurrentCampaign: (campaign) => set({ currentCampaign: campaign }),
      
      setCampaigns: (campaigns) => set({ campaigns }),
      
      addCampaign: (campaign) =>
        set((state) => ({ campaigns: [...state.campaigns, campaign] })),
      
      updateCampaign: (id, updates) =>
        set((state) => ({
          campaigns: state.campaigns.map((c) =>
            c.id === id ? { ...c, ...updates } : c
          ),
          currentCampaign:
            state.currentCampaign?.id === id
              ? { ...state.currentCampaign, ...updates }
              : state.currentCampaign,
        })),
      
      removeCampaign: (id) =>
        set((state) => ({
          campaigns: state.campaigns.filter((c) => c.id !== id),
          currentCampaign:
            state.currentCampaign?.id === id ? null : state.currentCampaign,
        })),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      setError: (error) => set({ error }),
      
      clearError: () => set({ error: null }),
    }),
    {
      name: 'campaign-storage',
      partialize: (state) => ({
        currentCampaign: state.currentCampaign,
      }),
    }
  )
);
