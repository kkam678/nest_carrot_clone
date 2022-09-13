import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('town')
export class Town {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;
}
