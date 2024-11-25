import { getMembers } from '../actions/memberActions';
import MemberCard from './MemberCard';

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-col-7 gap-8'>
      {members &&
        members?.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
    </div>
  );
}
