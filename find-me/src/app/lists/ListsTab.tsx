'use client';

import { Tab, Tabs } from '@nextui-org/react';
import { Member } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Key, useTransition } from 'react';
import MemberCard from '../members/MemberCard';
import LoadingComponent from '@/components/LoadingComponent';

type Props = {
  members: Member[];
  likeIds: string[];
};

export default function ListsTab({ members, likeIds }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const tabs = [
    { id: 'source', label: 'Liked by me' },
    { id: 'target', label: 'Like me' },
    { id: 'mutual', label: 'Mutual by me' },
  ];
  function handleTabChange(key: Key) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('type', key.toString());
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className='flex flex-col mt-10 gap-5'>
      <Tabs
        aria-label='Like tabs'
        items={tabs}
        color='secondary'
        onSelectionChange={(key) => handleTabChange(key)}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {isPending ? (
              <LoadingComponent />
            ) : (
              <>
                {members.length > 0 ? (
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-col-7 gap-8'>
                    {members.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        likeIds={likeIds}
                      />
                    ))}
                  </div>
                ) : (
                  <div>No members for this filter</div>
                )}
              </>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
