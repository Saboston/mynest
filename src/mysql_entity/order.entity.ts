import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //订单名称
    @Column({ length: 20 })
    name: string;

    //订单类型
    @Column({ type: "tinyint", width: 4 })
    type: number;

}