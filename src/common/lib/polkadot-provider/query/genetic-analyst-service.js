export async function queryGetAllGeneticAnalystServices(api) {
  const res = (await api.query.geneticAnalystServices.geneticAnalystServices.entries())
  return res
}

export async function queryGetGeneticAnalystServiceById(api, accountId) {
  const res = (await api.query.geneticAnalystServices.geneticAnalystServices(accountId))
    .toHuman()
  return res
}
