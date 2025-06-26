import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import wallet from "./Turbin3-wallet.json"
const MPL_CORE_PROGRAM_ID = new
PublicKey("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d");

const SYSTEM_PROGRAM_ID = SystemProgram.programId;

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

const provider = new AnchorProvider(connection, new Wallet(keypair), {
commitment: "confirmed"});

const program : Program<Turbin3Prereq> = new Program(IDL, provider);

const account_seeds = [
Buffer.from("prereqs"),
keypair.publicKey.toBuffer(),
];
const [account_key, _account_bump] =
PublicKey.findProgramAddressSync(account_seeds, program.programId);

const mintCollection = new
PublicKey("5ebsp5RChCGK7ssRZMVMufgVZhd2kFbNaotcZ5UvytN2");

const phantom = new PublicKey("BSXwF7zsDp4tDVpVvnTRtCM9ANyw1CdG2X9S1w3RtjAq"); 

const mintTs = Keypair.generate();

// (async () => {
// try {
// const txhash = await program.methods
// .update("surya-moorthy")
// .accountsPartial({
// user: phantom,
// account: account_key,
// system_program: SYSTEM_PROGRAM_ID,
// })
// .signers([keypair])
// .rpc();
// console.log(`Success! Check out your TX here:
// https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
// } catch (e) {
// console.error(`Oops, something went wrong: ${e}`);
// }
// })();

(async () => {
try {
const txhash = await program.methods.submitTs()
.accountsPartial({
user: keypair.publicKey,
account: account_key,
mint: mintTs.publicKey,
collection: mintCollection,
mpl_core_program: MPL_CORE_PROGRAM_ID,
system_program: SYSTEM_PROGRAM_ID,
})
.signers([keypair, mintTs])
.rpc();
console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
} catch (e) {
console.error(`Oops, something went wrong: ${e}`);
}})()