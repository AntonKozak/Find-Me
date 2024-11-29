# Find-Me

npm run dev - Start the development server.

npx create-next-app@latest .
npm install @nextui-org/react framer-motion --legacy-peer-deps .
npm i react-icons --legacy-peer-deps .
npm i react-hook-form zod @hookform/resolvers --legacy-peer-deps .
npm install next-auth@beta --legacy-peer-deps .
npm i -D ts node .

npm install @prisma/client @auth/prisma-adapter --legacy-peer-deps # Install Prisma Client and Prisma Adapter .
npm install prisma --save-dev --legacy-peer-deps # Install Prisma .
npx prisma init # Initialize Prisma .
npx prisma generate # Generate the Prisma Client .
npx prisma db push # Create the database .
npx prisma studio # Open the Prisma Studio .
Changed the DB models and now need to update the database: .
npx prisma generate .
npx prisma db push . # Push the changes to the database .
Write some data to seed and then seed.ts file: .
Add to packege.json
"prisma": {
"schema": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
}
npx prisma db seed .# Seed the database .

npm install bcryptjs --legacy-peer-deps # For hashing passwords .
npm i -D @types/bcryptjs --legacy-peer-deps # For TypeScript support .
npm install --save react-toastify --legacy-peer-deps.

npm i date-fns --legacy-peer-deps # For date formatting .

npm i cloudinary next-cloudinary --legacy-peer-deps .
npm i clsx --legacy-peer-deps # For conditional classnames .
