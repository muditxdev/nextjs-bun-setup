# Next.js Project with TurboPack

A modern Next.js application bootstrapped with TurboPack, TypeScript, and Bun package manager, featuring a robust development environment with ESLint, Husky, and Prettier for code quality.

## Features

- ⚡️ [Next.js](https://nextjs.org/) with [TurboPack](https://turbo.build/pack) for lightning-fast builds
- 🧰 [TypeScript](https://www.typescriptlang.org/) for type safety
- 📦 [Bun](https://bun.sh/) as package manager for improved performance
- 🧹 [ESLint](https://eslint.org/) for code linting
- ✨ [Prettier](https://prettier.io/) for code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) for Git hooks

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Install dependencies
bun install
```

### Development

```bash
# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build

```bash
# Create a production build
bun run build

# Start the production server
bun start
```

## Project Structure

```
├── .husky/              # Husky configuration for Git hooks
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # App router
│   ├── components/      # UI components
│   ├── lib/             # Utility functions and shared code
│   └── types/           # TypeScript type definitions
├── next.config.js       # Next.js configuration
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Scripts

```json
{
  "dev": "next dev --turbo",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

## Git Hooks

This project uses Husky to run pre-commit hooks:

- **pre-commit**: Runs linting and formatting checks
- **pre-push**: Runs type checking and tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TurboPack Documentation](https://turbo.build/pack/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)
- [ESLint Documentation](https://eslint.org/docs/user-guide/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Husky Documentation](https://typicode.github.io/husky/)

## Acknowledgments

- [Vercel](https://vercel.com/) for Next.js and TurboPack
- [Microsoft](https://www.microsoft.com/) for TypeScript
- [Jarred Sumner](https://github.com/jarred-sumner) for Bun