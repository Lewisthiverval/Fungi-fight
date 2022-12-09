import React, { useState } from "react";

export default function FighterCard({
  name,
  phrase1,
  phrase2,
}: {
  name: string;
  phrase1: string;
  phrase2: string;
}) {
  return (
    <div className="fighter">
      <h4>{name}</h4>
      <p>{phrase1}</p>
      <p>{phrase2}</p>
    </div>
  );
}
