import { useQuery } from "react-query";

type UseGetAptToUsdResponse = {
  aptToUsd: number | undefined;
  isLoading: boolean;
  error: unknown;
};

export function useGetAptToUsd(): UseGetAptToUsdResponse {
  const result = useQuery(["aptToUsd"], async () => {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=aptos&vs_currencies=usd",
    );
    let json = await response.json();
    return Number(json.aptos.usd);
  });

  const { isLoading, error } = result;
  const aptToUsd = result.data;

  return { aptToUsd, isLoading, error };
}