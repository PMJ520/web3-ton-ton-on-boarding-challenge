// ./scripts/mine.ts
import { Address, TonClient, WalletContractV4 } from "@ton/ton";
import { mnemonicToPrivateKey } from "@ton/crypto";

// 定义 run 函数（必须导出）
export async function run() {
  // 1. 初始化 TON 客户端
  const client = new TonClient({
    endpoint: "https://toncenter.com/api/v2/jsonRPC",
  });

  // 2. 加载钱包（替换为你的助记词）
  const mnemonic = "your_mnemonic_phrase_here".split(" ");
  const keyPair = await mnemonicToPrivateKey(mnemonic);
  
  // 3. 创建钱包合约
  const wallet = WalletContractV4.create({
    workchain: 0,
    publicKey: keyPair.publicKey,
  });

  // 4. 打印钱包地址
  const walletAddress = wallet.address.toString();
  console.log("Wallet Address:", walletAddress);

  // 5. 这里添加 NFT 挖矿逻辑（例如部署合约）
  // ...（根据文档补充你的逻辑）
}

// 确保调用 run()
run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
