import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IsNumber,  IsString, IsDate } from 'class-validator'
import Student from '../student/entity'


@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsNumber()
    @Column('integer', { nullable: false })
    number: number

    // Needs proper dates later on
    @IsString()
    @Column('text', { nullable: false })
    startdate: string

    @IsString()
    @Column('text', { nullable: true })
    enddate: string

    @OneToMany(_ => Student, student => student.batch)
    students: Student[]


}
