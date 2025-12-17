import type { HttpContext } from '@adonisjs/core/http'
import LivroService from '#services/livro_service'
import {
  criarLivroValidator,
  atualizarLivroValidator,
} from '#validators/livro_validator'

export default class LivrosController {
  private service = new LivroService()

  async index() {
    return this.service.listar()
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(criarLivroValidator)
    return this.service.criar(payload)
  }

  async show({ params }: HttpContext) {
    return this.service.buscarPorId(params.id)
  }

  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(atualizarLivroValidator)
    return this.service.atualizar(params.id, payload)
  }

  async destroy({ params }: HttpContext) {
    await this.service.remover(params.id)
    return { message: 'Livro removido com sucesso' }
  }

  async buscar({ request }: HttpContext) {
    return this.service.buscar(request.qs())
  }
}
