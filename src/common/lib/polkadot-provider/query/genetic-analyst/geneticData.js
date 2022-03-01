export async function geneticDataById(api, id) {
  const res = await api.query.geneticData.geneticDataById(id)

  return res.toHuman()
}
