export async function addGeneticData(api, pair, title, description, link) {
  const result = await api.tx.geneticData
    .addGeneticData(title, description, link)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}

export async function updateGeneticData(api, pair, id, title, description, link) {
  const result = await api.tx.geneticData
    .updateGeneticData(id, title, description, link)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}

export async function removeGeneticData(api, pair, id) {
  const result = await api.tx.geneticData
    .removeGeneticData(id)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}

export async function getAddGeneticDataFee(api, pair, title, description, link) {
  return api.tx.geneticData
    .addGeneticData(title, description, link)
    .paymentInfo(pair)
}

export async function getUpdateGeneticDataFee(api, pair, id, title, description, link) {
  return api.tx.geneticData
    .updateGeneticData(id, title, description, link)
    .paymentInfo(pair)
}

export async function getRemoveGeneticDataFee(api, pair, id) {
  return api.tx.geneticData
    .removeGeneticData(id)
    .paymentInfo(pair)
}
