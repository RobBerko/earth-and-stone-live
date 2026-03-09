export default function LogoDark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 300"
      className={className}
      aria-label="Earth &amp; Stone Scapes"
    >
      <text
        x="400"
        y="120"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="110"
        fontWeight="bold"
        fill="#686959"
      >
        Earth &amp; Stone
      </text>
      <text
        x="400"
        y="250"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="110"
        fontWeight="bold"
        fill="#686959"
      >
        Scapes
      </text>
      <line x1="80" y1="215" x2="200" y2="215" stroke="#b5c777" strokeWidth="5" />
      <line x1="600" y1="215" x2="720" y2="215" stroke="#b5c777" strokeWidth="5" />
    </svg>
  );
}
