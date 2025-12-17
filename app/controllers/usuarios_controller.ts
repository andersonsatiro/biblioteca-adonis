import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  async index({ response }: HttpContext) {
    return response.ok({ message: 'Listar usuários' })
  }

  async store({ request, response }: HttpContext) {
    const dados = request.all()
    return response.created({ message: 'Usuário cadastrado', dados })
  }

  async show({ params, response }: HttpContext) {
    return response.ok({ message: 'Detalhar usuário', id: params.id })
  }

  async update({ params, request, response }: HttpContext) {
    const dados = request.all()
    return response.ok({ message: 'Usuário atualizado', id: params.id, dados })
  }

  async destroy({ params, response }: HttpContext) {
    return response.ok({ message: 'Usuário removido', id: params.id })
  }
}
