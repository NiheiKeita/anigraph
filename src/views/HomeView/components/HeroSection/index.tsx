"use client"
import React from "react"

export const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-20 text-center text-white">
      <h1 className="mb-4 text-5xl font-bold">あなたのアニメ評価を可視化しよう！</h1>
      <p className="mb-8 text-xl">評価をつけて、感想を書いて、変遷をグラフで楽しむ新しいアニメ体験</p>
      <button className="rounded-full bg-white px-4 py-2 font-bold text-pink-500">今すぐ始める</button>
    </section>
  )
})
