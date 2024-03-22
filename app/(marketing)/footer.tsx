import { Button } from "@/components/ui/button";
import Image from "next/image";

const flags = [
  { name: "French", short: "fr", id: 1 },
  { name: "Spanish", short: "es", id: 2 },
  { name: "Croatian", short: "hr", id: 3 },
  { name: "Japanness", short: "jp", id: 4 },
  { name: "Italian", short: "it", id: 4 },
];

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map((flag, i) => (
          <Button
            size={"lg"}
            variant={"ghost"}
            className="w-full uppercase"
            key={flag.id}
          >
            <Image
              src={`/${flag.short}.svg`}
              height={32}
              width={40}
              alt={flag.name}
              className="mr-4 rounded-md"
            />
            {flag.name}
          </Button>
        ))}
      </div>
    </footer>
  );
};
