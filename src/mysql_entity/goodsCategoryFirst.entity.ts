import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsCategoryFirst {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //类型
    @Column({ type: "tinyint", width: 4 })
    category: number;

    //名称
    @Column({ length: 40, unique: true })
    name: string;

}