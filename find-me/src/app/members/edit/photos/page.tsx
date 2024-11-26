import { getAuthUserId } from '@/app/actions/authActions';
import {
  getMemberById,
  getMemberPhotoByUserId,
} from '@/app/actions/memberActions';
import { CardHeader, Divider, CardBody } from '@nextui-org/react';
import MemberPhotoUpload from './MemberPhotoUpload';
import MemberPhoto from '@/components/MemberPhoto';

export default async function PhotosPage() {
  const userId = await getAuthUserId();
  const member = await getMemberById(userId);
  if (!member) return null;
  const photos = await getMemberPhotoByUserId(userId);
  if (!photos) return null;

  return (
    <>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div className='text-2xl font-semibold text-secondary'>
          Edit Profile
        </div>
        <MemberPhotoUpload />
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhoto
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      </CardBody>
    </>
  );
}
