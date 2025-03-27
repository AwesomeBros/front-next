import { DeleteButton } from "@/components/board/delete-button";
import UpdateButton from "@/components/board/update-button";
import { Button } from "@/components/ui/button";
import { findPostById } from "@/lib/actions/post.actions";
import { format } from "date-fns";

interface DetailPageProps {
  params: {
    id: Promise<number>;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const postId = await id;
  const getPosts = await findPostById(postId);
  return (
    <main className="text-sm mt-20">
      <div className="mt-4 mb-7 border-b pb-3">
        <h2>{getPosts.title}</h2>
        <div className="flex justify-between items-center">
          <div className="mt-1 flex justify-start items-center gap-2">
            <p>{getPosts.author}</p> <span className="text-gray-500">|</span>{" "}
            <p>{format(getPosts.createdAt, "yyyy.MM.dd")}</p>
          </div>
          <div>
            <UpdateButton id={postId} />
            <DeleteButton id={postId} />
          </div>
        </div>
      </div>
      <div className="break-all whitespace-pre-wrap leading-1.5 align-baseline min-h-80">
        {getPosts.content}
      </div>
      <div className="flex justify-center items-center">
        <Button variant={"outline"}>목록</Button>
      </div>
    </main>
  );
}
