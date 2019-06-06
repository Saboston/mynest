import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 40 })
    userName: string;

    @Column({ type: "tinyint", width: 4 })
    age: number;

    @Column({ length: 60 })
    password: string;

    @Column({ type: "datetime", width: 6 })
    createTime: string;

    @Column({ length: 60 })
    company: string;

    @Column({ length: 40 })
    email: string;

    @Column()
    phone: number;

}