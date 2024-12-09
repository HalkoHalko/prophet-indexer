import { ponder } from "@/generated";
import * as schema from "../ponder.schema";

ponder.on("ProphetStakingToken:Claim", async ({ event, context }) => {
  await context.db
    .insert(schema.claimEvent)
    .values({ id: event.log.id, account: event.args.account, amount: event.args.amount });
});

ponder.on("ProphetStakingToken:Stake", async ({ event, context }) => {
  await context.db
    .insert(schema.stakeEvent)
    .values({ id: event.log.id, account: event.args.account, amount: event.args.amount });
});

ponder.on("ProphetStakingToken:Withdraw", async ({ event, context }) => {
  await context.db
    .insert(schema.withdrawEvent)
    .values({ id: event.log.id, account: event.args.account, amount: event.args.amount });
});

ponder.on("ProphetStakingToken:UpdateRewards", async ({ event, context }) => {
  await context.db
    .insert(schema.updateRewardsEvent)
    .values({
      id: event.log.id,
      account: event.args.account,
      rewards: event.args.rewards,
      totalShares: event.args.totalShares,
      cumulativeRewardPerShare: event.args.cumulativeRewardPerShare,
    });
});

ponder.on("ProphetStakingToken:OwnershipTransferred", async ({ event, context }) => {
  await context.db
    .insert(schema.ownershipTransferredEvent)
    .values({ id: event.log.id, previousOwner: event.args.previousOwner, newOwner: event.args.newOwner });
});

ponder.on("ProphetStakingToken:Initialized", async ({ event, context }) => {
  await context.db
    .insert(schema.initializedEvent)
    .values({ id: event.log.id, version: event.args.version });
});