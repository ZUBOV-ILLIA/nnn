import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditInvoiceWrapper from '@/app/ui/invoices/EditInvoiceWrapper';
import { Suspense } from 'react';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <EditInvoiceWrapper id={id} />
      </Suspense>
    </main>
  );
}
