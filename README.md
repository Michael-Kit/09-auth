This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# NoteHub

A minimalist note management application built with Next.js.  
Designed for clarity, maintainability, and strict adherence to requirements.

---

## Purpose

NoteHub allows users to:

- Create, search, and view notes
- Filter notes by topic
- Navigate through paginated results
- Create notes via modal form
- Experience smooth input UX with debounced search

---

## Technologies

- Next.js (App Router)
- TypeScript
- TanStack Query
- Formik + Yup
- CSS Modules
- React Hot Toast

---

## Project Structure

```
app/
├── notes/
│   └── Notes.client.tsx       // Main client-side component
components/
├── NoteForm/                  // Note creation form
├── NoteList/                  // List of notes
├── SearchBox/                 // Search input with debounce
├── Pagination/                // Pagination controls
├── Modal/                     // Modal wrapper
lib/
├── api.ts                     // API functions
types/
├── note.ts                    // Type definitions (Note, NoteTag, UpdateNoteParams)
```

---

## Local Setup

```bash
npm install
npm run dev
```

---

## Deployment

- Deployed via [Vercel](https://vercel.com/)
- SSR enabled
- Build passes successfully (`npm run build`)
- Environment variables must be configured manually

---

## Implementation Notes

- `updateNote` uses `PATCH` with optional fields via `UpdateNoteParams`
- `QueryClient` is initialized inside `TanStackProvider` using `useState` for safe concurrent rendering
- `SearchBox` separates `searchInput` (UX state) from `topic` (query trigger)
- Debounced search implemented via `useEffect` for smooth typing experience
- All types unified through `NoteTag` without duplication

---

## Author

Mykhaylo  
Former heavy-lift sea captain, now full-stack developer.  
Focused on clean architecture, minimalism, and precise execution.  
Committed to clarity, dignity, and disciplined development.
