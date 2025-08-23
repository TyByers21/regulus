import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { AdminLoginData, type AdminUser } from "@shared/schema";

interface AdminSession {
  id: number;
  username: string;
}

export function useAdminAuth() {
  const queryClient = useQueryClient();

  const { data: admin, isLoading } = useQuery<AdminSession>({
    queryKey: ['/api/admin/me'],
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: async (loginData: AdminLoginData) => {
      const response = await apiRequest('POST', '/api/admin/login', loginData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/me'] });
    }
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/admin/logout');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/me'] });
    }
  });

  return {
    admin,
    isLoading,
    isAuthenticated: !!admin,
    login: loginMutation.mutate,
    loginError: loginMutation.error,
    isLoggingIn: loginMutation.isPending,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
}