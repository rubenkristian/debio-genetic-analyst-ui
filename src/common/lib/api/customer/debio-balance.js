import apiClientRequest from "@/common/lib/api"

export const getDbioBalance = async () => {
  const { data } = await apiClientRequest.get("/conversion/cache")

  return data
}
