import type { HttpContext } from '@adonisjs/core/http'
import EmprestimoService from '#services/emprestimo_service'
import { criarEmprestimoValidator } from '#validators/emprestimo_validator'

export default class EmprestimosController {
  private service = new EmprestimoService()

  async index() {
    return this.service.listar()
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(criarEmprestimoValidator)
    return this.service.criar(payload)
  }

  async show({ params }: HttpContext) {
    return this.service.buscarPorId(params.id)
  }

  async devolver({ params }: HttpContext) {
    return this.service.devolver(params.id)
  }
}