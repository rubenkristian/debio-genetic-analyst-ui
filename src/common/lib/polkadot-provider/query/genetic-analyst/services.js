export async function serviceDetails(api, hashId) {
  const res = await api.query.geneticAnalystServices.geneticAnalystServices(hashId)

  return res.toHuman()
}
