import { createAccount, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptAccount, getMinimumBalanceForRentExemptMint, getOrCreateAssociatedTokenAccount, MINT_SIZE, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com ","confirmed");
const signer = Keypair.generate();

// without any abastractions
// mint account , token account

// const recentBlockhash = await connection.getLatestBlockhash();

// const airdropSignature = await connection.requestAirdrop(
//      signer.publicKey,
//      LAMPORTS_PER_SOL
// )

// await connection.confirmTransaction({
//      blockhash : recentBlockhash.blockhash,
//      signature : airdropSignature,
//      lastValidBlockHeight : recentBlockhash.lastValidBlockHeight
// })

// const mint = Keypair.generate();

// const mintRent = await getMinimumBalanceForRentExemptMint(connection);

// const createAccountInstruction = SystemProgram.createAccount({
//      fromPubkey : signer.publicKey,
//      newAccountPubkey : mint.publicKey,
//      programId : TOKEN_PROGRAM_ID,
//      lamports : mintRent,
//      space : MINT_SIZE
// })

// const initializeMintInstruction = createInitializeMint2Instruction(
//      mint.publicKey,
//      6,
//      signer.publicKey,
//      null,
//      TOKEN_PROGRAM_ID
// )

// const transaction = new Transaction().add(
//      createAccountInstruction,
//      initializeMintInstruction
// )

// const signature = await sendAndConfirmTransaction(connection,transaction,[signer,mint]);  

