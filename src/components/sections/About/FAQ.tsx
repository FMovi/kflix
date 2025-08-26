"use client";

import useBreakpoints from "@/hooks/useBreakpoints";
import { Accordion, AccordionItem, Link } from "@heroui/react";

const FAQS = [
  {
    title: "🤔 What is Kflix?",
    description:
      "Kflix is a streaming hub that helps you easily find and watch your favorite movies and TV shows in one place. No more wasting time searching across the internet — Kflix makes entertainment simple and convenient.",
  },
  {
    title: "❓ What does Kflix actually do?",
    description:
      "Here’s what we DON’T do: Kflix does not host or store any copyrighted content. All videos are linked from third-party services. Our platform is purely promotional and designed to make content discovery easier. If you love a movie or show, we strongly encourage you to support the creators by purchasing or subscribing through official channels.",
  },
  {
    title: "🚫 Why are there ads on videos?",
    description: (
      <p>
        We understand ads can be annoying, but Kflix has no control over ads shown by third-party
        video hosts. Please avoid downloading anything from popups. If you want an ad-free
        experience, we recommend using a trusted ad-blocker like{" "}
        <Link href="https://ublockorigin.com/" target="_blank" className="font-bold">
          uBlock Origin
        </Link>{" "}
        or{" "}
        <Link href="https://adblockplus.org/" target="_blank" className="font-bold">
          Adblock Plus
        </Link>
        . For the smoothest experience, subscribing to a legal streaming service is always the best
        option.
      </p>
    ),
  },
  {
    title: "🐌 Videos are buffering or not playing",
    description:
      "If a video doesn’t load, try selecting another available server from the player options (e.g., VidSrc, VidSrc V1, etc.). In most cases, switching servers fixes playback issues instantly.",
  },
  {
    title: "😁 Can I download videos from Kflix?",
    description:
      "Kflix does not provide downloads, since we don’t host files ourselves. All videos are streamed from third-party platforms. If you wish to keep a copy, we recommend buying or subscribing to official sources to support the creators.",
  },
  {
    title: "😟 Is streaming on Kflix safe?",
    description:
      "Streaming on Kflix is generally safe, since we don’t host files directly. However, downloading or re-uploading copyrighted material is illegal and not recommended. Use Kflix responsibly and enjoy your entertainment worry-free.",
  },
];

const FAQ = () => {
  const { mobile } = useBreakpoints();

  return (
    <Accordion variant="splitted" isCompact={mobile}>
      {FAQS.map(({ title, description }) => (
        <AccordionItem key={title} aria-label={title} title={title}>
          {description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
