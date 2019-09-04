import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsHoneMenu {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //类型
    @Column({ type: "tinyint", width: 4 })
    category: number;

    //名称
    @Column({ length: 40 })
    name: string;

}