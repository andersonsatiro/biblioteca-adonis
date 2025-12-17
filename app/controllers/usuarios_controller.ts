import type { HttpContext } from '@adonisjs/core/http'
import UsuarioService from '#services/usuario_service'
import {
  criarUsuarioValidator,
  atualizarUsuarioValidator,
} from '#validators/usuario_validator'

export default class UsuariosController {
  private service = new UsuarioService()

  async index() {
    return this.service.listar()
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(criarUsuarioValidator)
    return this.service.criar(payload)
  }

  async show({ params }: HttpContext) {
    return this.service.buscarPorId(params.id)
  }

  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(atualizarUsuarioValidator)
    return this.service.atualizar(params.id, payload)
  }

  async destroy({ params }: HttpContext) {
    await this.service.remover(params.id)
    return { message: 'Usuário removido com sucesso' }
  }
}
