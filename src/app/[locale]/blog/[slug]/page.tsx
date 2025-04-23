import { BlogDetail } from "@/components/blog-detail/BlogDetail";

type Props = {
    params: Promise<{ slug: string }>
}
export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    return (
        <>
            <div className="w-11/12 mx-auto mt-32">
                <BlogDetail slug={slug} />
            </div>
        </>
    )
}