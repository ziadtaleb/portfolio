import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Portfolio";

  const person = {
    name: "Ziad Taleb",
    role: "Senior Software Engineer",
    avatar: "/images/avatar.jpeg", // use a CDN path
  };

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "8rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "8rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <img
              src={person.avatar}
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ fontSize: "4.5rem", lineHeight: "4.5rem" }}>{person.name}</span>
              <span style={{ fontSize: "2.5rem", lineHeight: "2.5rem", opacity: 0.6 }}>
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
    }
  );
}
