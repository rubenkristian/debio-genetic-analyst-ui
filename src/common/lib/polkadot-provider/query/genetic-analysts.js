export async function queryGeneticAnalysts(api, accountId) {
  const res = await api.query.geneticAnalysts.geneticAnalysts(accountId)
  return res.toHuman()
}

export async function queryGeneticAnalystServices(api, serviceId) {
  const res = await api.query.geneticAnalystServices.geneticAnalystServices(serviceId)
  return res.toHuman()
}
