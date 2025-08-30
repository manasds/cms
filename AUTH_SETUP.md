# Google OAuth Setup with Better Auth

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/course_app"

# Better Auth
BETTER_AUTH_SECRET="your-super-secret-key-here-make-it-long-and-random"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
```

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set up the OAuth consent screen if prompted
6. Choose "Web application" as the application type
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
8. Copy the Client ID and Client Secret to your `.env.local` file

## Database Setup

1. Make sure your PostgreSQL database is running
2. Run the Prisma migration:
   ```bash
   npx prisma migrate dev
   ```
3. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000` and click the "Sign in with Google" button

## Features Implemented

- ✅ Google OAuth authentication
- ✅ User session management
- ✅ Protected routes (can be extended)
- ✅ User profile display
- ✅ Sign out functionality
- ✅ Responsive login button with Google branding

## Next Steps

You can now:
1. Add protected routes using the `useSession` hook
2. Access user data in your components
3. Implement role-based access control
4. Add more OAuth providers if needed 