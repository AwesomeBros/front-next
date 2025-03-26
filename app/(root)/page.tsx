import { BoardList } from "@/components/board/board-list";

export default function Home() {
  return (
    <div className="flex justify-center h-[calc(100vh-56px)]">
      <BoardList />
    </div>
  );
}
