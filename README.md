# CoVibe
## Development in Progress

### Getting Started
1. Clone the project:
   ```
   git clone https://github.com/hammoh7/CoVibe.git
   ```
2. Run:
   ```
   npm install
   ```
3. Create a .env.local. Copy below things with your appropriate data:
   <br />
   I have used Convex (for database), Clerk (for Authentication) and Liveblocks (for live and interactive boards)
   ```
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   LIVEBLOCKS_SECRET_KEY=
   ```
4. Then, run the development server:
   ```
   npm run dev
   ```
5. Open http://localhost:3000 with your browser to see the result
