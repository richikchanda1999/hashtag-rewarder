export const CHAIN_ID = process.env.IS_TEST === 'true' ? 80001 : 137;

export function formatAddress(address: string): string {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}