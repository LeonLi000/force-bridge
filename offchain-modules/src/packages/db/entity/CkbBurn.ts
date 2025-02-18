import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity()
export class CkbBurn {
  @PrimaryColumn()
  ckbTxHash: string;

  @Column()
  chain: number;

  @Index()
  @Column()
  senderLockHash: string;

  @Column()
  asset: string;

  @Column()
  amount: string;

  @Column()
  recipientAddress: string;

  @Index()
  @Column()
  blockNumber: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  from(data: {
    ckbTxHash: string;
    recipientAddress: string;
    amount: string;
    asset: string;
    chain: number;
    blockNumber: number;
    senderLockHash: string;
  }) {
    const record = new CkbBurn();
    record.ckbTxHash = data.ckbTxHash;
    record.chain = data.chain;
    record.asset = data.asset;
    record.amount = data.amount;
    record.recipientAddress = data.recipientAddress;
    record.blockNumber = data.blockNumber;
    record.senderLockHash = data.senderLockHash;
    return record;
  }
}
