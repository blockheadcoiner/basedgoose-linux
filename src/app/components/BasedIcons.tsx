"use client";
import React from "react";

export const TwitterIcon = () => (
  <a href="https://twitter.com" target="_blank" className="desktop-icon">
    <img src="/basedX.png" alt="Twitter" width={64} height={64} />
    <span>Based X</span>
  </a>
);

export const TelegramIcon = () => (
  <a href="https://t.me" target="_blank" className="desktop-icon">
    <img src="/TG.png" alt="Telegram" width={64} height={64} />
    <span>Telegram</span>
  </a>
);

export const GooseSuiIcon = () => (
  <a href="https://suiexplorer.com" target="_blank" className="desktop-icon">
    <img src="/goose.sui.png" alt="Goose Sui" width={64} height={64} />
    <span>Goose Sui</span>
  </a>
);

export const BasedWhaleIcon = () => (
  <video
    src="/BASEDWHALE.mp4"
    autoPlay
    loop
    muted
    className="rounded-xl border border-gray-800"
    width="150"
  />
);
