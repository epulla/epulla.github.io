export type OurSong = {
  title: string;
  cover: string;
  duration: string;
  path: string;
};

export const songs: OurSong[] = [
  {
    title: "Caricias Prohibidas - Viti Ruiz",
    cover: "/images/mylove/song-covers/caricias-prohibidas.webp",
    duration: "5:18",
    path: "/audio/mylove/fabricantes-de-midis_viti-ruiz-caricias-prohibidas.webm",
  },
  {
    title: "Mi cuerpo no está hecho de metal",
    cover: "/images/mylove/song-covers/mi-cuerpo-no-esta-hecho-de-metal.webp",
    duration: "4:39",
    path: "/audio/mylove/mi-cuerpo-no-esta-hecho-de-metal.webm",
  },
];
