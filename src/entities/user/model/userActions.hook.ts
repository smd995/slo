import { useCallback } from "react";

export const useUserActions = () => {
  const handleProfile = useCallback(() => {
    console.log("프로필 페이지로 이동");
    // 실제 구현: navigate('/profile');
  }, []);

  const handleSettings = useCallback(() => {
    console.log("설정 페이지로 이동");
    // 실제 구현: navigate('/settings');
  }, []);

  const handleLogout = useCallback(() => {
    console.log("로그아웃 처리");
    // 실제 구현: authService.logout();
  }, []);

  return { handleProfile, handleSettings, handleLogout };
};
