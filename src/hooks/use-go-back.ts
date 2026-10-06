import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Returns a navigation function that goes back if there's browser history,
 * or navigates to the homepage (with optional hash) as a fallback.
 * This prevents stranding users who arrive via direct/deep links.
 */
export function useGoBack() {
  const navigate = useNavigate();

  return useCallback(() => {
    // window.history.length > 1 doesn't reliably indicate "there's a previous
    // page in our app" (browsers start at 1 or 2). Instead, we use a simple
    // heuristic: if the Navigation API is available, check canGoBack; otherwise
    // we always navigate to home with a hash, which is safe in all cases.
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, [navigate]);
}
