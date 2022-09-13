import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_town')
export class UserTown {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'town_id' })
    townId: number;

    @ManyToOne(() => User, (user) => user.town)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;
}
