import { fetchNotes } from '@/lib/api/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug[0]} Notes`,
    description: `Notes with tag "${slug[0]}"`,
    openGraph: {
      title: `Notes: ${slug[0]}`,
      description: `Notes with tag "${slug[0]}"`,
      url: `https://08-zustand-tau-gilt.vercel.app/notes/filter/${slug[0]}`,
      images: [
        { url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg' },
      ],
    },
  };
}
// Prefetch виконується тільки для першої сторінки без пошуку (topic="").
// На клієнті NotesClient вже сам керує topic та page.
const topic = '';
const page = 1;

export default async function Notes({ params }: Props) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ['notes', topic, page, tag],
    queryFn: () => fetchNotes(topic, page, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
