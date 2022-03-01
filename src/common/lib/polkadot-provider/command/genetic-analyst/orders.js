export async function updateStatusOrder(api, pair, trackingId, status) {
  const result = await api.tx.geneticAnalysis
    .processGeneticAnalysis(trackingId, status)
    .signAndSend(pair, { nonce: -1 })

  return result.toHuman()
}

export async function rejectOrder(api, pair, trackingId, title, description) {
  const result = await api.tx.geneticAnalysis
    .rejectGeneticAnalysis(trackingId, title, description)
    .signAndSend(pair, { nonce: -1 })

  return result.toHuman()
}

export async function rejectOrderFee(api, pair, trackingId, title, description) {
  return await api.tx.geneticAnalysis
    .rejectGeneticAnalysis(trackingId, title, description)
    .paymentInfo(pair)
}

export async function submitOrderReport(api, pair, trackingId, reportLink, comment) {
  const result = await api.tx.geneticAnalysis
    .submitGeneticAnalysis(trackingId, reportLink, comment)
    .signAndSend(pair, { nonce: -1 })

  return result.toHuman()
}

export async function submitOrderReportFee(api, pair, trackingId, reportLink, comment) {
  return await api.tx.geneticAnalysis
    .submitGeneticAnalysis(trackingId, reportLink, comment)
    .paymentInfo(pair)
}

export async function fulfillOrder(api, pair, trackingId) {
  const result = await api.tx.geneticAnalysisOrders
    .fulfillGeneticAnalysisOrder(trackingId)
    .signAndSend(pair, { nonce: -1 })

  return result.toHuman()
}
