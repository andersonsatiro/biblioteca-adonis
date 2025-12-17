import type { HttpContext } from '@adonisjs/core/http'

export default class LivrosController {
  async index({ response }: HttpContext) {
    return response.ok({ message: 'Listar livros' })
  }

  async store({ request, response }: HttpContext) {
    const dados = request.all()
    return response.created({ message: 'Livro cadastrado', dados })
  }

  async show({ params, response }: HttpContext) {
    return response.ok({ message: 'Detalhar livro', id: params.id })
  }

  async update({ params, request, response }: HttpContext) {
    const dados = request.all()
    return response.ok({ message: 'Livro atualizado', id: params.id, dados })
  }

  async destroy({ params, response }: HttpContext) {
    return response.ok({ message: 'Livro removido', id: params.id })
  }

  async buscar({ request, response }: HttpContext) {
    const filtros = request.qs()
    return response.ok({ message: 'Buscar livros', filtros })
  }
}
