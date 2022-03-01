import apiClientRequest from "@/common/lib/api"

export async function getServiceRequestByCustomer(customerId) {
  const serviceRequests = await apiClientRequest.get(`/substrate/service-request/${customerId}`, {
    params: {
      size: 1000,
      page: 1
    }
  })
  return serviceRequests
}
