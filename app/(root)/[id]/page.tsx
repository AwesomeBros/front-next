interface DetailPageProps {
  params: {
    id: Promise<number>;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const getBlog = await blogFindById(id)
  return <main></main>;
}
