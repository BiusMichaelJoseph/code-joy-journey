# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Publish with Lovable

Open your [Lovable project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click **Share -> Publish**.

### Option 2: Deploy as a standard Vite site (recommended if you want full hosting control)

This app builds to static files, so you can host it on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host.

1. Install dependencies and create a production build:

```sh
npm i
npm run build
```

2. Verify the production build locally:

```sh
npm run preview
```

3. Deploy the generated `dist/` folder.

#### Host settings (quick reference)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18+ (20 recommended)

#### Netlify (example)

- New site -> Import from Git
- Build command: `npm run build`
- Publish directory: `dist`

#### Vercel (example)

- New Project -> Import Git repo
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

#### GitHub Pages (manual static deploy)

```sh
npm run build
# then publish dist/ with your preferred Pages workflow/action
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
