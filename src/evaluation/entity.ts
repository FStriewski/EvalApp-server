import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm'
import { IsString, IsDate, IsDateString } from 'class-validator'
import Teacher from '../teacher/entity'
import Student from '../student/entity'

//export type Grade = 'red' | 'yellow' | 'green'


@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text', { nullable: true })
    grade: string

    @IsString()
    @Column('text', { nullable: true })
    remark: string

    //Needs a proper default date date.now()
    // @IsDateString()
    // @CreateDateColumn()
    // createdDate: Date;

    @IsString()
    @Column('text', { nullable: true })
    date: string

    @ManyToOne(_ => Teacher, teacher => teacher.evaluations, { nullable: true } )
    teacher: Teacher

    @ManyToOne(_ => Student, student => student.evaluations)
    student: Student

}