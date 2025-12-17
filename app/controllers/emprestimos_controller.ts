import type { HttpContext } from '@adonisjs/core/http'

export default class EmprestimosController {
  async index({ response }: HttpContext) {
    return response.ok({ message: 'Listar empréstimos' })
  }

  async store({ request, response }: HttpContext) {
    const dados = request.all()
    return response.created({ message: 'Empréstimo registrado', dados })
  }

  async show({ params, response }: HttpContext) {
    return response.ok({ message: 'Detalhar empréstimo', id: params.id })
  }

  async devolver({ params, response }: HttpContext) {
    return response.ok({ message: 'Empréstimo devolvido', id: params.id })
  }
}
