import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserTown } from './user-town.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 11 })
    phone: string;

    @Column({ length: 300, default: '' })
    email: string;

    @Column({ length: 12, default: '' })
    name: string;

    @Column({ length: 12, default: '' })
    nickname: string;

    @Column({ name: 'thumbnail_url', length: 300, default: '' })
    thumbnailUrl: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public updatedAt: Date;

    @OneToMany(() => UserTown, (town) => town.user)
    public town: UserTown[];
}
