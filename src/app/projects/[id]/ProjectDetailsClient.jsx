"use client";
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProjectDetailsClient({ project }) {
  const params = useParams();
  const id = params?.id ? parseInt(params.id) : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Muzahid`;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [project]);

  return null; // no UI, just side effects
}
