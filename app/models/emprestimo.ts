import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DateTime } from 'luxon'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export type EmprestimoStatus = 'ativo' | 'atrasado' | 'finalizado'

export default class Emprestimo extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column({ columnName: "usuario_id" })
    declare usuarioId: number

    @column({ columnName: "livro_id" })
    declare livroId: number

    @column({ columnName: "data_emprestimo" })
    declare dataEmprestimo: Date

    @column({ columnName: "data_vencimento" })
    declare dataVencimento: Date

    @column({ columnName: "data_devolucao" })
    declare dataDevolucao: Date | null

    @column()
    declare status: EmprestimoStatus

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}