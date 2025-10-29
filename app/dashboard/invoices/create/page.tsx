import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { createInvoice } from '@/app/lib/actions';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Form action={createInvoice} />
      </Suspense>
    </main>
  );
}
