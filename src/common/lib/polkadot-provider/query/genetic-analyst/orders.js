export async function orderDetails(api, hashId) {
  const res = await api.query.geneticAnalysisOrders.geneticAnalysisOrders(hashId)

  return res.toHuman()
}
