"use client"

import React from "react"
import { Anime } from "../../types"
import Image from "next/image"

type Props = {
  anime?: Anime
}
export const AnimeCard = React.memo<Props>(function AnimeCard({
  anime,
}) {

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="relative h-56 w-full sm:h-44 md:h-44 lg:h-52">
        {/* <Image
          src={anime?.facebook_image_url ?? ''}
          alt={anime?.title ?? ''}
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
          className="w-full h-full rounded-lg"
        /> */}
        <Image
          src={anime?.facebook_image_url == '' ? "/unnamed.png" : anime?.facebook_image_url ?? ''}
          alt={anime?.title ?? ''}
          layout="fill"
          objectFit="cover"
          className="w-full rounded-lg"
        />

      </div>
      <h3 className="mt-4 text-xl font-bold">{anime?.title}</h3>
      <p className="text-sm text-gray-500">{anime?.title_kana}</p>
      <p className="text-sm italic text-gray-500">{anime?.title_en}</p>
      <p className="mt-2">メディア: {anime?.media}</p>
      <p className="mt-2">シーズン: {anime?.season_name}</p>
      <div className="mt-4 flex justify-between">
        <a href={anime?.official_site_url} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">公式サイト</a>
        <a href={anime?.wikipedia_url} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Wikipedia</a>
      </div>
    </div>
  );
})
