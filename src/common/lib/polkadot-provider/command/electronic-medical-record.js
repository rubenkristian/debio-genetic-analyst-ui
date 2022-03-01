export async function registerElectronicMedicalRecord(api, pair, data) {
  const result = await api.tx.electronicMedicalRecord
    .addElectronicMedicalRecord(data.title, data.category, data.files)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}

export async function updateElectronicMedicalRecord(api, pair, data) {
  const result = await api.tx.electronicMedicalRecord
    .updateElectronicMedicalRecord(data.id, data.title, data.category, data.files)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}

export function getCreateRegisterEMRFee(api, pair, data) {
  return api.tx.electronicMedicalRecord
    .addElectronicMedicalRecord(data.title, data.category, data.files)
    .paymentInfo(pair)
}

export function getDeleteEMRFee(api, pair, emrId) {
  return api.tx.electronicMedicalRecord
    .removeElectronicMedicalRecord(emrId)
    .paymentInfo(pair)
}

export async function deregisterElectronicMedicalRecord(api, pair, emrId) {
  const result = await api.tx.electronicMedicalRecord
    .removeElectronicMedicalRecord(emrId)
    .signAndSend(pair, { nonce: -1 })
  return result.toHuman()
}
