'use server';

import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Form from '@/app/ui/invoices/edit-form';

export default async function EditInvoiceWrapper({ id }: { id: string }) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return <Form invoice={invoice} customers={customers} />
} 