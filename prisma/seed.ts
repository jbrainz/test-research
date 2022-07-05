import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songData";

const prisma = new PrismaClient();

const seedData = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );
  const salt = await bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@pius.com" },
    update: {},
    create: {
      email: "user@pius.com",
      password: await bcrypt.hashSync("password", salt),
    },
  });
  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map((_, i) => {
      return prisma.playlist.create({
        data: {
          name: `playlist #${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

seedData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
