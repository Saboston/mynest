import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecommendLabels {
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //名称
    @Column({ length: 40 })
    name: string;

}