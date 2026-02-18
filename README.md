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

### Option 2: Deploy on Vercel (recommended)

This project is a Vite + React app and can be deployed directly to Vercel.

#### 1) Push your code to GitHub

Make sure your latest branch is pushed to a GitHub repository.

#### 2) Import the repo in Vercel

- Go to Vercel Dashboard -> **Add New...** -> **Project**
- Select your GitHub repository
- Keep the detected framework as **Vite**

#### 3) Confirm build settings

These settings are already configured in `vercel.json`:

- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

#### 4) Deploy

Click **Deploy**. Vercel will build and publish your site.

#### 5) SPA routing support (important)

This app uses React Router, so direct links like `/about` or `/services` need fallback routing.
The `vercel.json` rewrite rule handles this by serving `index.html` for app routes.

#### 6) Custom domain (optional)

In Vercel, open your project -> **Settings** -> **Domains** and add your domain.

#### Local production check (optional)

```sh
npm i
npm run build
npm run preview
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
