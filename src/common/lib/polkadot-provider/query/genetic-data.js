export async function queryGeneticDataById(api, dataId) {
  const res = (await api.query.geneticData.geneticDataById(dataId))
    .toHuman()
  return res
}

export async function queryGeneticDataByOwner(api, accountId) {
  const res = (await api.query.geneticData.geneticDataByOwner(accountId))
    .toHuman()
  return res
}
