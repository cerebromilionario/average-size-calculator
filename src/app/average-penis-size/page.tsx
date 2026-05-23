import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Average Penis Size: What Is Normal?',
  description: 'Understand global average ranges, how variation works, and how to interpret educational reference values responsibly.'
};

export default function Page() {
  return <article className="prose prose-slate max-w-none"><h1>Average Penis Size: What Is Normal?</h1><p>Human anatomy varies naturally, and a single number should not be used to define health, masculinity, or sexual function.</p><p>For this MVP, global reference values use Veale et al. (2015): erect length 13.12 cm, erect girth 11.66 cm, and flaccid length 9.16 cm.</p><p>These values are useful as educational context only. They do not replace individualized clinical evaluation when a medical concern exists.</p><p>Use the <Link href="/penis-size-calculator">calculator</Link> for private comparisons and read <Link href="/how-to-measure">how to measure correctly</Link> to reduce method bias.</p></article>;
}
