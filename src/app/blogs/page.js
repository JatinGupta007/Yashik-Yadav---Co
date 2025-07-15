import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Footer from "@/components/Footer";

const posts = [
  {
    date: "JAN 31, 2025",
    category: "CULTURE",
    categoryColor: "bg-pink-300",
    dateColor: "bg-white",
    image: "/star.jpg",
    title: "The Year We Forgot Where the Edges Were",
    author: "Green Veno",
    avatar: "/author1.png",
    cardColor: "bg-purple-200",
  },
  {
    date: "OCT 31, 2024",
    category: "PRODUCT",
    categoryColor: "bg-blue-200",
    dateColor: "bg-white",
    image: "/pyramids.jpg",
    title: "Before you Build, Take a Breath",
    author: "Amaka Muonagolu",
    avatar: "/author2.png",
    cardColor: "bg-gray-100",
  },
  {
    date: "OCT 24, 2024",
    category: "TECH",
    categoryColor: "bg-green-700 text-white",
    dateColor: "bg-white",
    image: "/coding.jpg",
    title: "Database Backups with Cloudflare R2",
    author: "Ayodeji Alarape",
    avatar: "/author3.png",
    cardColor: "bg-gray-100",
  },
];

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Popup />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-white">
        {/* Left: Stay In Touch */}
        <div className="bg-gray-100 p-10 flex flex-col justify-between space-y-8">
          <h2 className="text-6xl font-extrabold leading-none">
            STAY IN TOUCH
          </h2>

          <div className="flex items-center space-x-4">
            <Image src="/icons-group.png" alt="Icons" width={100} height={40} />
            <p className="text-lg text-black">
              We always have exciting things to talk about and we don’t want you
              to miss a single thing
            </p>
          </div>

          <div className="flex w-full mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 border border-gray-300"
            />
            <button className="bg-black text-white px-6 py-3 font-bold flex items-center gap-2">
              SUBSCRIBE <span className="text-xl">➜</span>
            </button>
          </div>
        </div>

        {/* Right: Recent Post */}
        <div className="bg-blue-600 text-white p-0">
          <div className="flex items-center justify-between p-3">
            <span className="bg-black text-white text-xs px-2 py-1 font-bold">
              RECENT POST
            </span>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-pink-300 text-black px-2 py-1 font-bold text-sm">
                CULTURE
              </span>
              <span className="bg-white text-black px-2 py-1 font-bold text-sm">
                MAY 7, 2025
              </span>
            </div>

            <div className="aspect-video relative mb-4">
              <Image
                src="/beach-post.jpg"
                alt="Post Image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Design With a Story, or Don’t Design at all
            </h3>

            <div className="flex items-center gap-2 text-sm">
              <Image
                src="/author-godwin.png"
                alt="Author"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>Godwin Olatunde</span>
            </div>

            <div className="text-right text-2xl mt-4">➜</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${post.cardColor}`}
          >
            <div className="p-3 flex items-center justify-between">
              <span className={`px-2 py-1 text-sm font-bold ${post.dateColor}`}>
                {post.date}
              </span>
              <span
                className={`px-2 py-1 text-sm font-bold ${post.categoryColor}`}
              >
                {post.category}
              </span>
            </div>
            <div className="aspect-[3/2] relative">
              <Image
                src={post.image}
                alt="Post Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center space-x-2">
                <Image
                  src={post.avatar}
                  alt="author"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default page;
