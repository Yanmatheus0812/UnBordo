import process from 'node:process';
import { prisma } from '../datasource';

async function main() {
  const yearLastTwoDigits = new Date().getFullYear().toString().slice(2, 4);
  const semester = new Date().getMonth() < 6 ? '1' : '2';

  const season = await prisma.season.create({
    data: {
      name: `Season ${new Date().getFullYear()}`,
      period: `${yearLastTwoDigits}/${semester}`,
    },
  });

  return season;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
