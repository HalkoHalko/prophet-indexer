import { onchainTable } from "@ponder/core";

export const depositRewardsEvent = onchainTable("deposit_rewards_event", (t) => ({
  id: t.text().primaryKey(),
  depositor: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const updateRewardsEvent = onchainTable("update_rewards_event", (t) => ({
  id: t.text().primaryKey(),
  account: t.hex().notNull(),
  rewards: t.bigint().notNull(),
  totalShares: t.bigint().notNull(),
  cumulativeRewardPerShare: t.bigint().notNull(),
}));

export const claimEvent = onchainTable("claim_event", (t) => ({
  id: t.text().primaryKey(),
  account: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const stakeEvent = onchainTable("stake_event", (t) => ({
  id: t.text().primaryKey(),
  account: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const withdrawEvent = onchainTable("withdraw_event", (t) => ({
  id: t.text().primaryKey(),
  account: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const ownershipTransferredEvent = onchainTable("ownership_transferred_event", (t) => ({
  id: t.text().primaryKey(),
  previousOwner: t.hex().notNull(),
  newOwner: t.hex().notNull(),
}));

export const initializedEvent = onchainTable("initialized_event", (t) => ({
  id: t.text().primaryKey(),
  version: t.bigint().notNull(),
}));