import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { PageHeader } from "@/components/common/page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <PageHeader title={title} description={description} />
      <div className="pb-8">{children}</div>
    </ClientPageWrapper>
  );
}
