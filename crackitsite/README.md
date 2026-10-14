# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Contact form email with Gmail

The contact form sends messages through Gmail SMTP. Copy `.env.example` to
`.env`, then replace the placeholder values:

```bash
NUXT_SMTP_HOST=smtp.gmail.com
NUXT_SMTP_PORT=587
NUXT_SMTP_USER=your-gmail-address@gmail.com
NUXT_SMTP_PASSWORD=your-16-character-google-app-password
NUXT_CONTACT_TO=info@crackit.co.ke
```

Gmail requires a Google **App Password** for SMTP authentication; your regular
Gmail password will not work. Create one from your Google Account security
settings after enabling two-step verification. Use the 16-character value
without spaces, even if Google displays it grouped with spaces. Do not commit
`.env` or share the app password. Restart the Nuxt server after changing
environment variables.

The form returns an error instead of showing a success message when SMTP is not
configured or delivery fails.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
