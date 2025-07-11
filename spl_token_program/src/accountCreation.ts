import { createAccount, createMint, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Connection, Keypair } from "@solana/web3.js";

export const connection = new Connection("https://api.devnet.solana.com ","confirmed");
export const signer = Keypair.generate();

export const mintAccount = await createMint(
     connection,
     signer,
     signer.publicKey,
     signer.publicKey,
     6
)

const tokenAccount = await createAccount(
     connection,
     signer,
     mintAccount,
     signer.publicKey,
     signer,     
)

const AssociatedTokenAccount = await getOrCreateAssociatedTokenAccount(
     connection,
     signer,
     // mint.publicKey,
     mintAccount,
     signer.publicKey,
     false
)