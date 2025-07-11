import { createAssociatedTokenAccountIdempotent, createAssociatedTokenAccountIdempotentInstruction, createMintToInstruction, getAssociatedTokenAddress } from "@solana/spl-token";
import { Keypair, Transaction } from "@solana/web3.js";
import { connection, mintAccount, signer } from "./accountCreation";

const destination = Keypair.generate();

const tokenAddress = await getAssociatedTokenAddress(
    mintAccount,
    destination.publicKey
)

const createAtaInstruction = createAssociatedTokenAccountIdempotentInstruction(
    signer.publicKey,
    tokenAddress,
    destination.publicKey,
    mintAccount
)

const mintToInstruction = createMintToInstruction(
    mintAccount,
    destination.publicKey,
    signer.publicKey,
    1_0000e6
)

const transaction = new Transaction().add(
    createAtaInstruction,
    mintToInstruction
)

const mintTo = 