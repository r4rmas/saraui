export const actions = {
  default: async function ({ request }) {
    const data = await request.formData()
    console.log(Object.fromEntries(data))
  }
}