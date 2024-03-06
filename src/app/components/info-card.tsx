import React from "react";

export default function InfoCard({
  header, body
  }: {
  header: React.ReactNode,
  body: React.ReactNode
}) {
  return (
    <div className="top-0 w-full min-h-32 pl-4 pr-4 mt-8 space-y-2">
      <div className="w-full h-10 bg-card rounded-t-lg rounded-b-sm shadow-[3px_3px_6px_rgba(0,0,0,0.1)] flex items-center p-4">
        {header}
      </div>
      <div className="w-full min-h-20 bg-card rounded-t-sm rounded-b-lg shadow-[3px_3px_6px_rgba(0,0,0,0.1)] p-4">
        {body}
      </div>
    </div>
  )
}
