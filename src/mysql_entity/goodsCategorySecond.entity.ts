import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsCategorySecond {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //父类Id
    @Column({ type: "tinyint", width: 4 })
    parentId: number;

    //父类标签
    @Column({ type: "tinyint", width: 4 })
    label: number;

    //名称
    @Column({ length: 40 })
    name: string;

    //图片地址
    @Column()
    imgUrl: string;

}