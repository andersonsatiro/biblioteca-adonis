import type { HttpContext } from '@adonisjs/core/http'

export default class MultasController {
  async index({ response }: HttpContext) {
    return response.ok({ message: 'Listar multas' })
  }

  async pagar({ params, response }: HttpContext) {
    return response.ok({ message: 'Multa paga', id: params.id })
  }
}
