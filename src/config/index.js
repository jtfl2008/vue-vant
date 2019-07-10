const baseURL =
  process.env.VUE_APP_EVN === 'prod'
    ? 'prod'
    : 'test'
export default {
  baseURL: baseURL
}
