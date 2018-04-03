import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IsNumber,  IsDateString } from 'class-validator'
import Student from '../student/entity'


@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsNumber()
    @Column('integer', { nullable: false })
    number: number

    // Needs proper dates 
    @IsDateString()
    @Column('date', { nullable: false })
    startdate: Date

    @IsDateString()
    @Column('date', { nullable: true })
    enddate: Date

    @OneToMany(_ => Student, student => student.evaluations)
    students: Student[]


}
