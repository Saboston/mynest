import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //介绍
    @Column({ type:"text",nullable:true})
    description:string;

}