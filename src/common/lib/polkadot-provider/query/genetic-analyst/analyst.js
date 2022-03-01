export async function analystDetails(api, analystId) {
  const res = await api.query.geneticAnalysts.geneticAnalysts(analystId)

  return res.toHuman()
}
