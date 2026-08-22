import { apiClient } from '@/lib/api';

export interface AuthTokens {
  access: string;
  refresh: string;
  is_new_user: boolean;
}

export const authService = {
  async requestOtp(email: string): Promise<{ message: string }> {
    return apiClient<{ message: string }>('/users/auth/request-otp/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async verifyOtp(email: string, otp: string): Promise<AuthTokens> {
    return apiClient<AuthTokens>('/users/auth/verify-otp/', {
      method: 'POST',
      body: JSON.stringify({ email, otp }),
    });
  },

  async googleLogin(token: string): Promise<AuthTokens> {
    return apiClient<AuthTokens>('/users/auth/google/', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  },

  async logout(refresh: string): Promise<{ message: string }> {
    return apiClient<{ message: string }>('/users/auth/logout/', {
      method: 'POST',
      body: JSON.stringify({ refresh }),
    });
  },
};