'use client';

import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from 'next-cloudinary';
import { HiPhoto } from 'react-icons/hi2';

type Props = {
  onUploadImage: (result: CloudinaryUploadWidgetResults) => void;
};

export default function ImageUploadButton({ onUploadImage }: Props) {
  return (
    <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={onUploadImage}
      signatureEndpoint='/api/sign-image'
      className={`flex items-center gap-2 bg-secondary text-white rounded-lg py-2 px-4 hover:bg-secondary-dark`}
    >
      <HiPhoto size={28} /> Upload Image
    </CldUploadButton>
  );
}