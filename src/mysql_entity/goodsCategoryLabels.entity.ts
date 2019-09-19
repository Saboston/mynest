import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsCategoryLabels {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //父类Id
    @Column({ type: "tinyint", width: 4 })
    parentId:number;

    //名称
    @Column({ length: 40 })
    name: string;

}