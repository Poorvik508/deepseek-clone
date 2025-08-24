"use client";

import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar expand={expand} setExpand={setExpand} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
        {/* Mobile top bar */}
        <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
          <Image
            onClick={() => setExpand(!expand)}
            src={assets.menu_icon}
            alt="menu"
            width={24}
            height={24}
            className="rotate-180 cursor-pointer"
          />
          <Image
            src={assets.chat_icon}
            alt="chat"
            width={24}
            height={24}
            className="opacity-70"
          />
        </div>

        {/* Empty state */}
        {messages.length !== 0 ? (
          <>
            <div className="flex items-center gap-3">
              <Image
                src={assets.logo_icon}
                alt="logo"
                width={64}
                height={64}
                className="h-16 w-16"
              />
              <p className="text-2xl font-medium">Hi, I'm Deepseek.</p>
            </div>
            <p className="text-sm mt-2">How can I help you today?</p>
          </>
        ) : (
            <div>
              <Message role='user' content='What is next js'/>
          </div>
        )}
        <PromptBox isLoading={isLoading} setIsLoading={ setIsLoading} />
        {/* Footer note */}
        <p className="text-xs absolute bottom-1 text-gray-500">
          AI-generated, for reference only
        </p>
      </div>
    </div>
  );
}
