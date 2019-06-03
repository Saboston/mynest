import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 40 })
    userName: string;

    @Column('tinyint')
    age: number;

    @Column({ length: 60 })
    password: string;

    @Column()
    createTime: string;
}