import apiClientRequest from "@/common/lib/api";
import localStorage from "@/common/lib/local-storage";

export async function GAGetOrders() {
  const { data } = await apiClientRequest.get(`substrate/genetic-analysis-order/list/analyst/${localStorage.getAddress()}`, {
    params: {
      size: 1000,
      page: 1
    }
  });

  return data;
}
