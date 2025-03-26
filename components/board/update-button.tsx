import { Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function UpdateButton({ id }: { id: number }) {
  return (
    <Button className="mr-5" variant={"outline"} asChild>
      <Link href={`/write/${id}`}>
        <Edit />
      </Link>
    </Button>
  );
}
