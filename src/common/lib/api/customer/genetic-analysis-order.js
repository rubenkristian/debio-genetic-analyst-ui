import apiClientRequest from "@/common/lib/api"

export const setGeneticAnalysisPaid = async (orderId) => {
  const payload = {
    genetic_analysis_order_id: orderId
  }

  const { data } = await apiClientRequest.post("/substrate/geneticAnalysisOrderPaid", payload)

  return data
}
