// Typeorm Imports
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

// Enum Imports

// Entity Imports

@Entity('user')
export class UserEntity {
  // ======================================== Columns ========================================
  @PrimaryColumn({ type: 'varchar', primary: true })
  id: string;

  @Column({ type: 'varchar', nullable: true })
  first_name: string;

  @Column({ type: 'varchar', nullable: true })
  last_name: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth: Date;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  profile_picture: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // ======================================== Relations ========================================

  /**
   * 1. Many-to-one with UserRoleEntity
   * 2. One-to-many with OTPTableEntity
   */
}
