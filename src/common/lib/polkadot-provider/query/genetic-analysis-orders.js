export async function lastAnlysisOrderByCustomer(api, address) {
  const res = await api.query.geneticAnalysisOrders.lastGeneticAnalysisOrderByCustomer(address)
  return res.toHuman()
}

export async function queryGeneticAnalysisOrders(api, id  ) {
  const res = await api.query.geneticAnalysisOrders.geneticAnalysisOrders(id)
  return res.toHuman()
}
