import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value || !value.asset) return null;

      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value.alt || "Article image"}
            width={1200}
            height={675}
            className="rounded-2xl"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 text-center mt-3">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-brand-gold)] pl-6 py-4 my-8 italic text-xl text-gray-700 bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-[var(--color-brand-navy)] mt-10 mb-5">
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[var(--color-brand-blue)] hover:text-[var(--color-brand-navy)] underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};
