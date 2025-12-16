import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export default class Livro extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare titulo: string

    @column()
    declare isbn: string

    @column()
    declare editora: string

    @column({ columnName: 'ano_publicacao' })
    declare anoPublicacao: number

    @column()
    declare edicao: string

    @column({ columnName: 'quantidade_paginas' })
    declare quantidadePaginas: number

    @column()
    declare genero: string

    @column({ columnName: 'local_prateleira' })
    declare localPrateleira: string | null

    @column({ columnName: 'total_copias' })
    declare totalCopias: number

    @column({ columnName: 'copias_disponiveis' })
    declare copiasDisponiveis: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}