import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
    //用户ID
    @PrimaryGeneratedColumn()
    id: number;

    //昵称
    @Column({ length: 60, nullable: true })
    nickName: string;

    //性别
    @Column({ length: 10, nullable: true })
    sex: string;

    //年龄
    @Column({ type: "tinyint", width: 4, nullable: true })
    age: number;

    //密码
    @Column({ length: 60, nullable: true })
    password: string;

    //创建时间
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true })
    createTime: string;

    //手机号
    @Column({ nullable: true })
    phone: number;

    //头像地址
    @Column({ nullable: true })
    avatarUrl: string;

    //修改个人信息时间
    @Column({ type: "timestamp", nullable: true, onUpdate: "CURRENT_TIMESTAMP" })
    updatetime: string;

    //openid
    @Column({ length: 30, nullable: true })
    openid: string;

}