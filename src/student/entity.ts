import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { IsString } from 'class-validator'
//import * as bcrypt from 'bcrypt'
import Evaluation from '../evaluation/entity'
import Batch from '../batch/entity'


@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text', { nullable: false })
    name: string

    @IsString()
    @Column('text', { nullable: true })
    link: string

    @OneToMany(_ => Evaluation, evaluation => evaluation.student)
    evaluations: Evaluation[]

    @ManyToOne(_ => Batch, batch => batch.students)
    batch: Batch

}
