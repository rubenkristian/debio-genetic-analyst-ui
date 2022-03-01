export async function queryGeneticAnalystQualifications(api, id) {
  const res = (await api.query.geneticAnalystQualifications.geneticAnalystQualifications(id))
    .toHuman()
  return res
}
