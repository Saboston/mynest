import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goods {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //类型
    @Column({ length: 80 })
    imgUrl: string;

    //类别
    @Column({ type: "tinyint", width: 4 })
    category: number;

    //名称
    @Column({ length: 40 })
    name: string;

}