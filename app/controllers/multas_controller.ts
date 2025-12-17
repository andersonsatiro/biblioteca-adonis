import type { HttpContext } from '@adonisjs/core/http'
import MultaService from '#services/multa_service'


export default class MultasController {
  private service = new MultaService()

  async index() {
    return this.service.listar()
  }

  async pagar({ params }: HttpContext) {
    return this.service.pagar(params.id)
  }
}