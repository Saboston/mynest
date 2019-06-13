import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
    //用户ID
    @PrimaryGeneratedColumn()
    id: number;
    
    //用户名
    @Column({ length: 40 })
    userName: string;

    //昵称
    @Column({ length: 40,nullable:true })
    nickName: string;

    //年龄
    @Column({ type: "tinyint", width: 4,nullable:true })
    age: number;

    //密码
    @Column({ length: 60,nullable:true })
    password: string;

    //创建时间
    @Column({ type: "timestamp",default: () => "CURRENT_TIMESTAMP",nullable:true})
    createTime: string;

    //所属公司
    @Column({ length: 60,nullable:true })
    company: string;

    //邮箱
    @Column({ length:40,nullable:true })
    email: string;

    //手机号
    @Column({nullable:true})
    phone: number;

    //头像
    @Column({nullable:true})
    avatar: string;

    //地址
    @Column({ length:100,nullable:true })
    address: string;

    //修改个人信息时间
    @Column({ type: "timestamp",nullable:true,onUpdate:"CURRENT_TIMESTAMP" })
    updatetime: string;

}