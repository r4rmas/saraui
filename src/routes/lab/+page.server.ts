export const actions = {
  default: async function({ request }) {
    const data = await request.formData()
    const obj = Object.fromEntries(data)
    console.log(obj)
  }
}