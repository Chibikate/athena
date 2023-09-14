import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-center text-white p-6 mt-2">
      <div className="container mx-auto">
        <p className="text-xs lg:text-sm">
          © {new Date().getFullYear()} Web-based Tutorial on Virtual Planning
          for Reconstruction of Simple Mandibular Fractures
        </p>
        <p className="font-bold text-sm lg:text-base">
          Mindanao State University - Iligan Institute of Technology (MSU-IIT)
        </p>
        <p className="text-xs lg:text-sm">
          Andres Bonifacio Avenue, Tibanga 9200 Iligan City, Philippines
        </p>
        <p className="mt-4 text-xs lg:text-sm">
          For inquiries, contact us at:{" "}
          <a href="mailto:contact@example.com">
            queeniekate.cabanilla@g.msuiit.edu.ph or <span />{" "}
            kaye.velarde@g.msuiit.edu.ph
          </a>
        </p>
        <p className="text-xs lg:text-sm">
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
