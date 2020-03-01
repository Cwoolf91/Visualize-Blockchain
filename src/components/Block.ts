import * as crypto from 'crypto';

// Basic block element
export class Block {

    // the unique hash for this block
    readonly hash: string;
    readonly nonce: number;

    // default constructor
    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        const { nonce, hash } = this.mine();
        this.hash = hash;
        this.nonce = nonce;
    }

    // Calculate the unique hash
    private calculateHash(nonce: number): string {
        const data = this.index + this.previousHash + this.timestamp + this.data + nonce;
        return crypto
            .createHash('sha256')
            .update(data)
            .digest('hex');
    }

    // Verify valid block
    private mine(): { nonce: number, hash: string } {
        let hash: string;
        let nonce = Math.random();

        do {
            nonce = Math.random();
            hash = this.calculateHash(nonce);
        } while (hash.startsWith('00000') === false);

        return { nonce, hash }
    }
}