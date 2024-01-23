import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}

//https://www.youtube.com/watch?v=O5cmLDVTgAs
//https://www.youtube.com/watch?v=O5cmLDVTgAs
