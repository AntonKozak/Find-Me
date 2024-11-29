import { getMemberById } from '@/app/actions/memberActions';
import CardInnerWrapper from '@/components/CardInner Wrapper';
import { notFound } from 'next/navigation';

export default async function MemberDetailedPage({
  params,
}: {
  params: { userId: string };
}) {
  const param = await params;
  const member = await getMemberById(param.userId);
  if (!member) return notFound();

  return (
    <CardInnerWrapper
      header={'Profile'}
      body={<div>{member.description}</div>}
    />
  );
}
