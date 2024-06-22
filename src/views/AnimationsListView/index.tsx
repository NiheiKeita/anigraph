"use client"

import React from "react"
import { AnimeCard } from "./components/AnimeCard";
import { useQuestionView } from "./hooks";

export const AnimationsListView = React.memo(function AnimationsListView() {
  // const animes: Anime[] = [
  //   {
  //     id: 12790,
  //     title: "終末トレインどこへいく？",
  //     title_kana: "しゅうまつとれいんどこへいく",
  //     title_en: "Shuumatsu Train Doko e Iku?",
  //     media: "tv",
  //     official_site_url: "https://shumatsu-train.com/",
  //     wikipedia_url: "https://ja.wikipedia.org/wiki/%E7%B5%82%E6%9C%AB%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%81%A9%E3%81%93%E3%81%B8%E3%81%84%E3%81%8F%3F",
  //     facebook_image_url: "https://shumatsu-train.com/core_sys/images/others/ogp.jpg",
  //     season_name: "2024-spring",
  //   },
  //   {
  //     id: 10620,
  //     title: "夜のクラゲは泳げない",
  //     title_kana: "よるのくらげはおよげない",
  //     title_en: "JELLYFISH CAN'T SWIM IN THE NIGHT",
  //     media: "tv",
  //     official_site_url: "https://yorukura-anime.com/",
  //     wikipedia_url: "https://ja.wikipedia.org/wiki/%E5%A4%9C%E3%81%AE%E3%82%AF%E3%83%A9%E3%82%B2%E3%81%AF%E6%B3%B3%E3%81%92%E3%81%AA%E3%81%84",
  //     facebook_image_url: "https://yorukura-anime.com/ogimage.png",
  //     season_name: "2024-spring",
  //   },
  // ]
  const { animations } = useQuestionView()
  return (
    <section className="bg-gray-50 py-20 text-gray-700">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">アニメ一覧</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {animations?.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
})
