import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BannerTypes {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //图片类型
    @Column({  type: "tinyint", width: 4 })
    type: number;

    //类型名称
    @Column({ length: 20 })
    title: string;

}