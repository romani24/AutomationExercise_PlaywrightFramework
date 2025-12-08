/**
 * Test utilities
 */

// Generate unique email with timestamp
export function generateUniqueEmail(prefix: string = 'testuser'): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}_${timestamp}_${random}@example.com`;
}

// Generate random text
export function generateRandomText(length: number = 10): string {
    return Math.random().toString(36).substring(2, length + 2);
}

// Generate random phone number
export function generatePhoneNumber(): string {
    const prefixes = ['91', '92', '93', '96'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const number = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return `${prefix}${number}`;
}

// Wait with retry
export async function waitForCondition(
    condition: () => Promise<boolean>,
    timeout: number = 10000,
    interval: number = 500
): Promise<boolean> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        if (await condition()) return true;
        await new Promise(resolve => setTimeout(resolve, interval));
    }
    return false;
}
