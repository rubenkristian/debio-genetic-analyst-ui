export async function analysisDetails(api, trackingId) {
  const res = await api.query.geneticAnalysis.geneticAnalysisStorage(trackingId)

  return res.toHuman()
}
