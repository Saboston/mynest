import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Banner {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //图片地址
    @Column()
    imgUrl: string;

    //图片所属类别
    @Column({ length: 20 })
    type: string;

    //备注
    @Column({ length: 80 })
    remark: string;

}