import React, { useState } from "react";
import { Form } from "./components/Form";

export const Authorize = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ name: string }>();
  if (!user) return <Form onLogin={(x) => setUser(x)} />;
  return <>{children}</>;
};
