import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../store";

export const Authorize = ({ children }: { children: React.ReactNode }) => {
  const nav = useNavigate();
  const isAuthorised = useAppState((x) => x.isAuthorised());

  useEffect(() => {
    if (!isAuthorised) nav("/login");
  }, [isAuthorised]);

  if (!isAuthorised) return null;

  return <>{children}</>;
};
