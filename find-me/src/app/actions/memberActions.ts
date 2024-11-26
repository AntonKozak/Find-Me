'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { Photo } from '@prisma/client';

export async function getMembers() {
  const session = await auth();

  if (!session?.user?.id) return null;

  try {
    return prisma.member.findMany({
      where: {
        NOT: {
          userId: session.user.id,
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMemberById(userId: string) {
  try {
    const memberId = await prisma.member.findUnique({
      where: {
        userId,
      },
    });

    return memberId;
  } catch (error) {
    console.log(error);
  }
}

export async function getMemberPhotoByUserId(userId: string) {
  const member = await prisma.member.findUnique({
    where: {
      userId,
    },
    select: {
      Photo: true,
    },
  });
  if (!member) return null;
  return member.Photo.map((p) => p) as Photo[];
}
