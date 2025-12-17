import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DateTime } from 'luxon'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export default class Multa extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column({ columnName: "data_emprestimo" })
    declare dataEmprestimo: Date

    @column({ columnName: "usuario_id" })
    declare usuarioId: number

    @column()
    declare valor: number

    @column({ columnName: "dias_atraso" })
    declare diasAtraso: number

    @column()
    declare paga: boolean

    @column({ columnName: "data_pagamento" })
    declare dataPagamento: Date | null

    @column({ columnName: "emprestimo_id" })
    declare emprestimoId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}