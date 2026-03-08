/**
 * Pretty console logger with colors and icons for test output.
 * Uses ANSI escape codes (supported in Windows 10+ PowerShell, Node, most terminals).
 */

const colors = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
};

const icons = {
  info: 'ℹ',
  success: '✓',
  warn: '⚠',
  response: '↳',
  data: '▸',
};

function formatLine(icon: string, label: string, color: string, message: string): void {
  const prefix = `${color}${icon} ${label}${colors.reset} ${colors.dim}|${colors.reset}`;
  console.log(`${prefix} ${message}`);
}

export const logger = {
  info(message: string): void {
    formatLine(icons.info, 'INFO', colors.blue, message);
  },

  success(message: string): void {
    formatLine(icons.success, 'OK', colors.green, message);
  },

  warn(message: string): void {
    formatLine(icons.warn, 'SKIP', colors.yellow, message);
  },

  response(label: string, data: unknown): void {
    const prefix = `${colors.cyan}${icons.response} ${label}${colors.reset} ${colors.dim}|${colors.reset}`;
    console.log(prefix);
    console.log(`${colors.gray}${JSON.stringify(data, null, 2)}${colors.reset}`);
  },

  data(label: string, value: string): void {
    formatLine(icons.data, label, colors.magenta, value);
  },
};
