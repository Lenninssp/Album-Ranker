import { useSession } from "@/context/auth"
import { useSavedItems } from "@/context/savedItems";
import { useEffect } from "react";

export const AppInitializer = () => {
  const userId = useSession();

  const loadUserData = useSavedItems((s) => s.loadUserData);

  useEffect(() => {
    const id = userId.getId();
    if (id == null) return;
    loadUserData(id);
  }, [userId, loadUserData]);

  return null;
}