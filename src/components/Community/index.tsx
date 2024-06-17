"use client"
import React from "react"

export const Community = React.memo(function Community() {
  return (
    <section className="bg-pink-100 py-20 text-gray-700">
      <div className="container mx-auto px-6 text-center lg:px-20">
        <h2 className="mb-12 text-3xl font-bold">コミュニティ</h2>
        <p className="mb-6 text-lg">他のアニメファンと交流しよう！</p>
        <button className="rounded-full bg-pink-500 px-4 py-2 font-bold text-white">コミュニティページへ</button>
        <div className="mt-10">
          <h3 className="mb-4 text-2xl font-bold">今週の人気トピック</h3>
          <ul className="space-y-4">
            <li>トピック1</li>
            <li>トピック2</li>
            <li>トピック3</li>
          </ul>
        </div>
      </div>
    </section>
  )
})
