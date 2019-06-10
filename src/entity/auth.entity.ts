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

    @Column({ length: 60,nullable:true })
    company: string;

    @Column({ length:40,nullable:true })
    email: string;

    @Column()
    phone: number;

    @Column({ length:100,nullable:true })
    address: string;

}