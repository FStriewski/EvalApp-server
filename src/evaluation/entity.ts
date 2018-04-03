import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IsString, IsDate } from 'class-validator'
import Teacher from '../teacher/entity'
import Student from '../student/entity'

export type Grade = 'red' | 'yellow' | 'green'


@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    grade: Grade

    @IsString()
    @Column('text')
    remark: string

    // Needs a proper default date date.now()
    @IsDate()
    @Column( { default: 'date' })
    date: Date 

    @ManyToOne(_ => Teacher, teacher => teacher.evaluations)
    teacher: Teacher

    @ManyToOne(_ => Student, student => student.evaluations)
    student: Student

}