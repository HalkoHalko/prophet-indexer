import { createConfig, mergeAbis } from "@ponder/core";
import { http } from "viem";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config();

import { RouterImplAbi } from "./abis/RouterImplAbi";
import { RouterProxyAbi } from "./abis/RouterProxyAbi";

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_1),
      pollingInterval: 300000, // 5 minutes in milliseconds
    },
  },
  contracts: {
    ProphetStakingToken: {
      network: "arbitrum",
      abi: mergeAbis([RouterProxyAbi, RouterImplAbi]),
      address: "0x37EA4C3fd77DBf4e796f86fC75bCde83567c846e",
      startBlock: 24360642,
    },
  },
  database: {
    kind: "postgres",
    connectionString: process.env.DATABASE_URL,
  },
});