/*This is the main object that holds all the blocks forming a chain
*/
import { Block } from "./Block";

// Blockchain class to hold blocks
export class Blockchain {

    // Singleton implementation
    private static instance: Blockchain;

    // class member to hold array of blocks
    private readonly chain: Block[] = [];

    // retrieve the latest block
    private get latestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    // default constructor
    private constructor() {
        
        // variables to initiate with random data
        let start = Math.random();
        let startData = Math.random().toString();
        this.chain.push(
            new Block(start, startData, Date.now(), 'Genesis Block')
        );
    }

    // Singleton implementation
    public static getInstance(): Blockchain {
        if(!Blockchain.instance) {
            Blockchain.instance = new Blockchain();
        }
        return Blockchain.instance;
    }

    // add a new block
    addBlock(data: string): void {
        const block = new Block(
            this.latestBlock.index + 1,
            this.latestBlock.hash,
            Date.now(),
            data
        );
        this.chain.push(block);
    }
}