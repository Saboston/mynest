import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //类型
    @Column({ type: "tinyint", width: 4 })
    type: number;

    //名称
    @Column({ length: 40 })
    name: string;

}